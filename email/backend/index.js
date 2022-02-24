
var express = require("express");
var apiServer = express();
var cors = require('cors')
apiServer.use(cors())
var fs = require("fs");  //manipoliamo il file system
const { response } = require("express");
apiServer.listen(3000, "localhost", () => {
    console.log("Server in ascolto http://localhost:3000/");

});



apiServer.get("/log-in", (request, response) => {
    console.log("utente: " + request.query.user + " Password: " + request.query.password);

    fs.readFile("Utenti.json", (err, data) => {
        var Utenti = JSON.parse(data);

        if (err) {
            response.statusCode = 500;

        } else {
            var u = Utenti.find(x => x.user == request.query.user);
            var p = Utenti.find(x => x.password == request.query.password);

            if (u != undefined && p != undefined) {
                response.statusCode = 200;
                response.json([{ user: "bravo" }]);
            } else {
                response.statusCode = 400;
            }
        }
    });
});


apiServer.get("/Sign-in", (request, response) => {
    console.log("utente: " + request.query.user + " Password: " + request.query.password);
    fs.readFile("Utenti.json", (err, data) => {
        if (err) {
            response.send(
                "<h1>error during the reading </h1>"

            );
        } else {
            var Utenti = JSON.parse(data);  //salvo su una variabile gli studenti attuali
            var u = Utenti.find(x => x.user == request.query.user);
            
            if (u===undefined) {

                Utenti.push({ //inserisco gli studenti nuovi
                    "user": request.query.user,
                    "password": request.query.password,

                });
                fs.writeFile("Utenti.json", JSON.stringify(Utenti), (err) => { //riscrivo tutto il file
                    if (!err) {
                        response.statusCode = 200;
                        response.json([{ user: "ti sei resi" }]);

                    } else {
                        response.statusCode = 400;
                    }
                });
            } else {
                response.statusCode = 500;
            }

        }
    });
});
