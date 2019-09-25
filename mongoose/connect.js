const mongoose = require("mongoose");
//Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/firstDB",{
        useMongoClient: true
    }).then(() => {
        console.log("mongoDB conectado.")
    }).catch((erro) =>{
        console.log("Erro: "+erro)
    })

// Model - Usuários
    //definindo model
        const UserSchema = mongoose.Schema({
            nome:{
                type: String,
                require: true
            },
            email: {
                type: String,
                require: true
            },
            idade: {
                type: Number,
                require: true
            },
            pais: {
                type: String,
                require: true
            }
        });

//Collection
    mongoose.model("usuarios", UserSchema);
    
    //criando novo usuário
        const usuario  = mongoose.model("usuarios");
        
        new usuario({
            nome: "Roberto",
            email: "roberto@email.com",
            idade: 22,
            pais: "Brasil"
        }).save().then(() => { //salvando usuario
            console.log("usuario criado.");
        }).catch((erro) =>{
            console.log("Erro: "+erro);
        })

    