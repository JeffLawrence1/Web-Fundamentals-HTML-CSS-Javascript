$(document).ready(function() {
    $("button").click(function() {

        var first = $("#first").val();
        var last = $("#last").val();
        var desc = $("textarea").val();

        $("#right").append("<div id = 'card'><p>" + first + " " + last + "</p><p id = 'back'> " + desc + "</p></div>");

        $("#first").val("");
        $("#last").val("");
        $("#desc").val("");

        return false;
    });

    $(document).on('click', '#card', function() {

        $(this).children().toggle();
    });
});