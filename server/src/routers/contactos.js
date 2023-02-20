const { Router } = require("express");
const Contacto = require("../models/contacto");
const moment = require("moment");
const { checkValidateContacto } = require("../helpers/validatecontacto");
const { validationResult } = require("express-validator");
const { validateJWT } = require("../middlewares/validatetoken");

const router = Router();

router.get("/", [validateJWT], async function (req, res) {
  try {
    const ciudadanos = await Contacto.find();
    res.send(ciudadanos);
  } catch (error) {
    console.log("Ocurrio un error en el registro", error);
    res.status(500).send("Ocurrio un error en el registro");
  }
});

router.get("/:documentoId", async function (req, res) {
  try {
    const ciudadano = await Contacto.findOne({
      identification: req.params.documentoId,
    });

    if (!ciudadano) return res.status(404).send("Ciudadano no se encuentra");

    res.status(200).send(ciudadano);
  } catch (error) {
    res.status(500).send("Ocurrio un error al tratar de leer el ciudadano");
  }
});

router.post("/crear", checkValidateContacto(), async function (req, res) {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const existCiudadano = await Contacto.findOne({
      identification: req.body.identification,
    });

    if (existCiudadano) {
      return res.status(400).send("El ciudadano ya se encuentra registrado");
    }

    let ciudadano = Contacto();

    ciudadano.identification = req.body.identification;
    ciudadano.firstName = req.body.firstName;
    ciudadano.secondName = req.body.secondName;
    ciudadano.firstSurname = req.body.firstSurname;
    ciudadano.secondSurname = req.body.secondSurname;
    ciudadano.cellPhone = req.body.cellPhone;
    ciudadano.phone = req.body.phone;
    ciudadano.email = req.body.email;
    ciudadano.facebook = req.body.facebook;
    ciudadano.instagram = req.body.instagram;
    ciudadano.dateBirth = moment(req.body.dateBirth).format("YYYY-MM-DD");
    ciudadano.dateCreation = moment(new Date()).format("YYYY-MM-DD h:mm:ss A");
    ciudadano.dateUpdate = moment(new Date()).format("YYYY-MM-DD h:mm:ss A");

    ciudadano = await ciudadano.save();

    res.status(200).send(ciudadano);
  } catch (error) {
    console.log("El registro no se efectuo ", error);
    res.status(500).send("El registro no se efectuo ");
  }
});

router.put("/:documentoId", checkValidateContacto(), async function (req, res) {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    let ciudadano = await Contacto.findOne({
      identification: req.params.documentoId,
    });

    if (!ciudadano) return res.status(404).send("Ciudadano no se encuentra");

    ciudadano.firstName = req.body.firstName;
    ciudadano.secondName = req.body.secondName;
    ciudadano.firstSurname = req.body.firstSurname;
    ciudadano.secondSurname = req.body.secondSurname;
    ciudadano.dateBirth = req.body.dateBirth;
    ciudadano.dateUpdate = new Date();

    ciudadano = await ciudadano.save();

    res.status(200).send(ciudadano);
  } catch (error) {
    res
      .status(500)
      .send("Ocurrio un error al tratar de actualizar el ciudadano");
  }
});

router.delete("/:documentoId", async function (req, res) {
  try {
    let ciudadano = await Contacto.findOneAndDelete({
      identification: req.params.documentoId,
    });

    if (!ciudadano) {
      return res.status(404).send("Ciudadano no esta registrado");
    } else {
      return res.status(200).send("Registro eliminado con exito");
    }
  } catch (error) {
    res.status(500).send("El registro no se pudo eliminar");
  }
});

module.exports = router;
