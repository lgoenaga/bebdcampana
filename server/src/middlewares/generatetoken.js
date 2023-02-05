const jwt = require('jsonwebtoken');

const generateJWT = (usuario) =>{

    const payload = {id: usuario.id, user: usuario.user, rol: usuario.rol};
    const token = jwt.sign(payload, 'L@gp2O22.', {expiresIn: '1d'});
    return token;

}

module.exports = {
    generateJWT
}