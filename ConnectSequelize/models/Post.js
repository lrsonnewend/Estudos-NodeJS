const db = require("./data");
const Post = db.sequelize.define('postagens',{
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.STRING
    }
});

module.exports = Post;

//Post.sync({force: true}); ->executar este comando apenas uma vez