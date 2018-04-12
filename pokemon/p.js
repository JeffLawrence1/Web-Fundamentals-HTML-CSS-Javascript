function poke() {
    var pokeAdd = "<img src='http://pokeapi.co/media/img/";
    var png = ".png'>";
    var url = "";
    //var img = "img = src"
    //var pokeArr = [];
    for (var i = 1; i < 152; i++) {
        url += pokeAdd + i + png;
        //<img src="http://pokeapi.co/media/img/7.png">
    }
    return url;
}
//console.log(poke());

$(document).ready(function() {
    $("div").append(poke());
});