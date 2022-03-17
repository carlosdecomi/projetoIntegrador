const bcrypt = require('bcryptjs');
const UserModel = require('../Model/UserModel')
module.exports = {
    create (req,res) {
        const user = req.body;
        console.log(user)
        const erros = []    
        if (!user) {
            erros.push({msg: "Preencha os campos para cadastrar!"})
            return res.render('login', {erros,user})
        }
        UserModel.create({...user, senha: bcrypt.hashSync(user.senha, 10)})
          return res.redirect('/')
    }
};



