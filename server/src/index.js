const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, '../../client/admininfo/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/admininfo/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
