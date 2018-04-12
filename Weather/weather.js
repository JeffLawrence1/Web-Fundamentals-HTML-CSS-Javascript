 $(document).ready(function() {
     $('form').submit(function() {
         var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $('#location').val() + ",uk&&appid=291d2bdc5fcadf1382744f3d5274ad46";
         console.log(url);

         $.get(url, function(res) {
             $("div").html("");
             var main = (res.main.temp) * (9 / 5) - 459.67;
             console.log(main);
             var weather = res.weather[0].main;
             console.log(weather);
             var lon = res.coord.lon;
             console.log(lon);
             var lat = res.coord.lat;
             console.log(lat);
             var wind = res.wind.speed;
             console.log(wind);
             //  var sunset = res.sunset;
             //  console.log(sunset);

             $("div").append("<h1>" + $('#location').val() + "</h1>");
             $("div").append("<h3>Current Temperature:</h3><p>" + Math.floor(main) + " Degrees Fahrenheit</p>");
             $("div").append("<h2>Additional info</h2>");
             $("div").append("<h3>Current Weather:</h3><p>" + weather + "</p>");
             $("div").append("<h4>Wind Speed (mph): " + wind + "</h4>");
             $("div").append("<h4>Coordinates: Lon:" + lon + ", Lat:" + lat + "</h4>");

             //  $("div").append("<h4>Sunset: " + sunset + "</h4>");
         }, 'json');

         return false;
     });
 });