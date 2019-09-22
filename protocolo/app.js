var prot = require('http'); 

prot.createServer(function(req, res){
    res.end("welcome");
}).listen(8081); //criando servidor 

console.log("servidor rodando.");