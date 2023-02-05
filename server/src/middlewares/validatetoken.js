const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ mensaje: "No esta autorizado" });
  }

  try {
    const payload = jwt.verify(token, "L@gp2O22.");
    req.payload = payload;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(402)
      .json({ mensaje: "Error en el acceso realice el Login nuevamente" });
  }
};

module.exports = {
  validateJWT,
};
