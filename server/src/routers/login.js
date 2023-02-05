const Router = require("express");
const router = Router();
const { compareSync } = require("bcryptjs");
const { validationResult } = require("express-validator");
const { checkValidateLogin } = require("../helpers/validatelogin");
const { generateJWT } = require("../middlewares/generatetoken");
const Usuario = require("../models/usuarios");

/*router.get("/", async function (req, res) {
  try {
    const usuarios = await Usuario.find();
    return res.status(200).send(usuarios);
  } catch (error) {
    console.log("Usuarios no se han podido listar ", error);
    return res.status(500).send("Usuarios no se han podido listar ");
  }
});

router.get("/:userLogin", async function (req, res) {
  try {
    const usuario = await Usuario.findOne({
      user: req.params.userLogin,
    });

    if (!usuario) return res.status(404).send("usuario no se encuentra");

    res.status(200).send(usuario);
  } catch (error) {
    res.status(500).send("Ocurrio un error al tratar de leer el usuario");
  }
});*/

router.post("/", checkValidateLogin(), async function (req, res) {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const usuario = await Usuario.findOne({ user: req.body.user });

    if (!usuario) {
      console.log("Información Incorrecta");
      return res.status(401).json({ mensaje: "Información Incorrecta" });
    }

    const pwd = compareSync(req.body.password, usuario.password);

    if (!pwd) {
      console.log("Información Incorrecta");
      return res.status(402).json({ mensaje: "Información Incorrecta" });
    }

    const token = generateJWT(usuario);

    return res
      .status(200)
      .json({ _id: usuario._id, user: usuario.user, rol: usuario.rol, access_token: token });
  } catch (error) {
    console.log("Oucrrio un error", error);
    res.status(500).json({ mensaje: "Error interno en el servidor" });
  }
});

module.exports = router;
