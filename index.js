
var express = require("express");
var apiServer = express();
var cors = require('cors')
apiServer.use(cors())
//var fs = require("fs");  //manipoliamo il file system
apiServer.listen(3000, "localhost", () => {
    console.log("Server in ascolto http://localhost:3000/");

});


apiServer.get("/log-in", (request, response) => {
    console.log("utente: " + request.query.user + " Password: " + request.query.password);
    if (request.query.user == "luca" && request.query.password == "ciao") {
        response.statusCode=200;
        response.json("message: log in effettuato");
    } else {
        response.sendStatus(400);
    }
    /*
    fs.readFile("utenti", (err,data) => {
       var utenti= JSON.parse(data);
     
    
    
    });
    */
});
