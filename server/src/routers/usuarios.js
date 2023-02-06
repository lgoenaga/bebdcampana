const Router = require("express");
const Usuario = require("../models/usuarios");
const router = Router();
const moment = require("moment");
const encrypt = require("bcryptjs");
const { checkValidateUser } = require("../helpers/validateuser");
const { validationResult } = require("express-validator");
const {validateJWT} = require("../middlewares/validatetoken");



router.post(
  "/crear",
  [checkValidateUser(), validateJWT],
  async function (req, res) {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      const existUser = await Usuario.findOne({ user: req.body.user });
      if (existUser) {
        return res.status(409).send("El usuario ya existe");
      }

      let usuario = Usuario();

      if (req.body.password != "") {
        const salt = encrypt.genSaltSync();
        const password = encrypt.hashSync(req.body.password, salt);
        usuario.password = password;
      } else {
        return res.status(401).send("Password requrida");
      }

      usuario.user = req.body.user;
      usuario.rol = req.body.rol;
      usuario.estado = req.body.estado;
      usuario.dateCreation = moment(new Date()).format("YYYY-MM-DD h:mm:ss A");
      usuario.dateUpdate = moment(new Date()).format("YYYY-MM-DD h:mm:ss A");

      usuario = await usuario.save();

      console.log("Usuario creado correctamente");
      console.log(usuario);
      return res.status(200).send(usuario);
    } catch (error) {
      console.log("Usuario no se ha podido crear ", error);
      return res.status(500).send("Usuario no se ha podido crear ");
    }
  }
);

router.get("/", validateJWT, async function (req, res) {
  try {
    const usuarios = await Usuario.find();

    return res.status(200).send(usuarios);
  } catch (error) {
    console.log("Usuarios no se han podido listar ", error);
    return res.status(500).send("Usuarios no se han podido listar ");
  }
});

router.get("/:userLogin", validateJWT, async function (req, res) {
  try {
    const usuario = await Usuario.findOne({
      user: req.params.userLogin,
    });

    if (!usuario) return res.status(404).send("usuario no se encuentra");

    return res.status(200).send(usuario);
  } catch (error) {
    return res
      .status(500)
      .send("Ocurrio un error al tratar de leer el usuario");
  }
});

router.put("/:userLogin", checkValidateUser(), async function (req, res) {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    let usuario = await Usuario.findOne({
      user: req.params.userLogin,
    });

    if (!usuario) return res.status(404).send("Usuario no se encuentra");

    if (req.body.password != "") {
      const salt = encrypt.genSaltSync();
      const password = encrypt.hashSync(req.body.password, salt);
      usuario.password = password;
    } else {
      return res.status(401).send("Password requrida");
    }

    usuario.rol = req.body.rol;
    usuario.estado = req.body.estado;
    usuario.dateUpdate = moment(new Date()).format("YYYY-MM-DD h:mm:ss A");

    usuario = await usuario.save();

    return res.status(200).send(usuario);
  } catch (error) {
    res.status(500).send("Ocurrio un error al tratar de actualizar el usuario");
  }
});

router.delete("/:userLogin", validateJWT, async function (req, res) {
  try {
    let usuario = await Usuario.findOneAndDelete({
      user: req.params.userLogin,
    });

    if (!usuario) {
      return res.status(404).send("Usuario no esta registrado");
    } else {
      return res.status(200).send("Usuario eliminado con exito");
    }
  } catch (error) {
    res.status(500).send("El Usuario no se pudo eliminar");
  }
});

module.exports = router;
