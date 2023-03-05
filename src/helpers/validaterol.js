const validarRoleAdmin = (req, res) =>{
    const rol = req.payload.rol;
  
    return rol;
}

const validarRoleEdit = (req, res) => {
  if (req.body.rol != "Editor") {
    return res.status(401).json({ mesaje: "Usuario no autorizado" });
  }
  return "Editor";
};

module.exports = { validarRoleAdmin, validarRoleEdit };