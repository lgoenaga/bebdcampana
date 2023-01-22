const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegistroCiudadano = new Schema(
  {
    identification: {
      type: String,
      unique: true,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: false,
    },
    firstSurname: {
      type: String,
      required: true,
    },
    secondSurname: {
      type: String,
      required: false,
    },
    dateBirth: {
      type: Date,
      default: Date.now,
      required: false,
    },
    dateCreation: {
      type: Date,
      default: Date.now,
      required: false,
    },
    dateUpdate: {
      type: Date,
      default: Date.now,
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("registrociudadanos", RegistroCiudadano);
