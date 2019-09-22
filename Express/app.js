const express = require("express");
const app = express(); //criando cópia inteira do framework express para a variável app

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/about", function(req, res){
    res.sendFile(__dirname+ "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("to blog");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("Salve "+req.params.nome +"<br>cargo "+req.params.cargo);

});


app.listen(8053, function(){
    console.log("Servidor tá rodando");
});