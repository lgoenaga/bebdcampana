const Router = require("express");
const Usuario = require("../models/usuarios");
const router = Router();

router.get("/", async function (req, res) {
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
});

module.exports = router;
