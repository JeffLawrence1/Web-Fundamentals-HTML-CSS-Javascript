$(document).ready(function() {
    console.log("read me");
    $('#but').click(function() {

        //$('form').submit(function() {
        console.log("read me to");
        $("#table tr:last").after("<tr><td>" + $("#first").val() + "</td><td>" + $("#last").val() + "</td><td>" + $("#email").val() + "</td><td>" + $("#con").val() + "</td></tr>");

        return false;
        //});
    });
});