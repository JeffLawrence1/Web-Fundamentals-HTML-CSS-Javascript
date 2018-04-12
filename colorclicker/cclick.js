 function random_color() {
     var rgb = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
     color = '#' //this is what we'll return!
     for (var i = 0; i < 6; i++) {
         x = Math.floor((Math.random() * 16))
         color += rgb[x];
     }
     return color;
 }
 $(document).ready(function() {
     $('#large_box').click(function() {
         //alert('you clicked the big box!');
         //comment this out when you have figured out what event.stopPropagation is used for
         $("#large_box").css("background-color", random_color());
         $("#large_box").children().css("background-color", random_color());
     })
     $('.side_box').click(function(event) {

         event.stopPropagation();
         console.log("read me")
         $(".side_box").siblings().css("background-color", random_color());


     });
     $('.middle_box').click(function(event) {
         event.stopPropagation();
         $(".middle_box").parent().css("background-color", random_color());
     })
 });