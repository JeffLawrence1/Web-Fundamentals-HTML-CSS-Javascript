$(document).ready(function() {
    $("img").click(function() {
        var id = $(this).attr("id");

        var apiURL = "https://anapioficeandfire.com/api/houses/" + id;



        $.get(apiURL, function(res) {
            $("p").html("");
            var name = res.name;
            console.log(name);
            var words = res.words;
            console.log(words);
            var title = res.titles;
            console.log(title);

            $("p").append("<h2>House Name:</h2><p>" + name + "</p>");
            $("p").append("<h2>House Words:</h2><p>" + words + "</p>");
            $("p").append("<h2>House Titles:</h2><p>" + title + "</p>");




        }, "json");
    });
});