$(document).ready(function() {
    for (var i = 1; i <= 152; i++) {
        var string1 = "<img id='" + i + "' src='" + "http://pokeapi.co/media/img/" + i + ".png'>";
        $('#pokemon:first').after(string1);
    }
    $("img").click(function() {
        var apiURL = "http://pokeapi.co/api/v2/";
        var id = $(this).attr("id");
        $.getJSON(apiURL + "pokemon/" + id + "/", function(data) {
            $("#box").html("");
            var height = data.height;
            var weight = data.weight;
            var name = data.name;
            var type = [];
            for (var i = 0; i <= data.types.length - 1; i++) {
                type.push(data.types[i].type.name);
            }
            $("#box").append("<h2>" + name + "</h2>");
            $("#box").append("<img src=" + "http://pokeapi.co/media/img/" + data.id + ".png>")
            $("#box").append("<h3>Types</h3>");
            for (var i = 0; i <= type.length - 1; i++) {
                $("#box").append("<li>" + type[i] + "</li>");
            }
            $("#box").append("<h3>Height</h3><p>" + height + "</p>");
            $("#box").append("<h3>Weight</h3><p>" + weight + "</p>");
        }, "json");
    });
});