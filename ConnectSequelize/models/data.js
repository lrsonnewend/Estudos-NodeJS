const Sequelize = require("sequelize");

//Conexao com o MySQL
    const sequelize = new Sequelize('postagens', 'root', 'sonnewendcardoso2006', {
        host:"localhost",
        dialect: 'mysql'
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
