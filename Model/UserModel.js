const fs = require ('fs')
const path = require ('path');
const usersJSON = path.join('user.JSON')

module.exports = {
    create ({nome, email, senha}) {
        if(!nome || !email || !senha) return;

        const usuariosCadastrados = JSON.parse(fs.readFileSync(usersJSON))
        usuariosCadastrados.push({nome, email, senha})
        return fs.writeFileSync(usersJSON, JSON.stringify(usuariosCadastrados))
    }
}