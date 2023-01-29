const express = require("express");
const getConexion = require("./helpers/dbconection");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

const port = process.env.NODE_PORT;
const host = process.env.NODE_HOST;

const path = require("path");

app.use(cors());
getConexion();

app.use(express.json());

// Hacer que node sirva los archivos de nuestro app React
app.use(
  express.static(path.resolve(__dirname, "../../client/admininfo/build"))
);

app.use("/contactos", require("./routers/contactos"));
app.use("/usuarios", require("./routers/usuarios"));
app.use("/login" , require ("./routers/login"));

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../../client/admininfo/build", "index.html")
  );
});

app.listen(port, () => {
  console.log(`Server ${host} listening on port ${port}`);
});
