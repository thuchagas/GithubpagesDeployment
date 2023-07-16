document.getElementById("submit-btn").addEventListener("click", function() {
    var temperature = document.getElementById("temperature").value;
    var message;

    if (temperature < 0) {
        message = "Qué friiiio, voy a congelar";
    } else if (temperature >= 0 && temperature < 12) {
        message = "Que fresquito, no?";
    } else if (temperature >= 12 && temperature < 23) {
        message = "Estoy a gustito!";
    } else if (temperature >= 23 && temperature <= 28) {
        message = "Ya empieza el calorcito, eh?";
    } else {
        message = "Puto calor!";
    }

    document.getElementById("message").innerHTML = message;
});
