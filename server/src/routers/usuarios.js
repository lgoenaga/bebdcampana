const Router = require("express");
const Usuario = require("../models/usuarios");
const router = Router();
const moment = require ("moment");

router.post('/crear', async function(req, res){
    try {
        
        const existUser = await Usuario.findOne({user: req.body.user});
        if (existUser){
            return res.status(409).send('El usuario ya existe');
        }

        let usuario = Usuario();

        usuario.user = req.body.user;
        usuario.password = req.body.password;
        usuario.rol = req.body.rol;
        usuario.estado = req.body.estado;
        usuario.dateCreation = moment (new Date()).format(
      "YYYY-MM-DD h:mm:ss A");
        usuario.dateUpdate = moment(new Date()).format(
      "YYYY-MM-DD h:mm:ss A");

        usuario = await usuario.save();

        console.log('Usuario creado correctamente');
        console.log(usuario);
        return res.status(200).send(usuario);

    } catch (error) {
        console.log('Usuario no se ha podido crear ', error);
        return res.status(500).send('Usuario no se ha podido crear ');
    }
});

router.get('/', async function(req, res){

  try {
    
    const usuarios = await Usuario.find();
    return res.status(200).send(usuarios);

  } catch (error) {
            console.log("Usuarios no se han podido listar ", error);
            return res.status(500).send("Usuarios no se han podido listar ");
  }

});

module.exports = router;