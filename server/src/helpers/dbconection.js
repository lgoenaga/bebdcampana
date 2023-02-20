const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const db_user = process.env.USER_DB;
const db_pwd = process.env.USER_PWD;
const db_name = process.env.DB_MONGODB;

const getConection = async () => {
  //const uri = `mongodb://${db_user}:${db_pwd}@ac-sfp3nqu-shard-00-00.mbrxfyk.mongodb.net:27017,ac-sfp3nqu-shard-00-01.mbrxfyk.mongodb.net:27017,ac-sfp3nqu-shard-00-02.mbrxfyk.mongodb.net:27017/${db_name}?ssl=true&replicaSet=atlas-vjhget-shard-0&authSource=admin&retryWrites=true&w=majority`;
  const uri = process.env.DB_URI;
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("conectado a mongodb"))
    .catch((e) => console.log("error de conexión", e));
};

module.exports = getConection;
