$("#log-in").click(function () {
    console.log("bravo");
    var mail = $("#mail").val();  //var rende la variabile visibile nel contesto
    var password = $("#password").val();

    if (mail && password) {
        console.log("mail:" + mail + " Password:  " + password);
        $.ajax({
            url: "http://localhost:3000/log-in?user=" + mail + "&&" + "password=" + password,
            type: "GET",
            success: function (data) {  //call back una funzione dentro un'altro
                console.log("bravo")
                $("body").css("background-color", "green");

            },
            error: function (err) {
                $("body").css("background-color", "red");
            }


        })

    } else {
        $("#output").html("i campi non possono essere vuoti")

    }
});

$("#sign-in").click(function () {
    console.log("bravo2");
    var mail = $("#mail").val();  //var rende la variabile visibile nel contesto
    var password = $("#password").val();

    if (mail && password) {
        $.ajax({
            url: "http://localhost:3000/Sign-in?user=" + mail + "&&" + "password=" + password,
            type: "GET",
            success: function (data) {
                $("body").css("background-color", "green");
                $("#output").html("Ti sei registrato con successo");
            },
            error: function (err) {
                $("body").css("backgroud-color", "red");
                $("#output").html("Utente già registato");
            }
        })


    } else {
        $("#output").html("i campi non possono essere vuoti")
    }


});
