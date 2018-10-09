


function countDownTimer() {
   var timer = window.setInterval(function() {
      if(time === 0) {
         window.clearInterval(timer);
         var gif = $("<img>");

         addGif("https://gph.is/28K7aoX");
      }
      $("#countDown").text("Time Remaining: "+time+" seconds");
      time--;
   },1000);
}

function displayGif() {
   var apiKey = "&api_key=esVM1on81mgFJNOTDbCiTRHD44n6r4Za";
   var url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling";
   var queryUrl = url + apiKey;
   $.ajax({
      url: queryUrl,
      method: "GET"
   }).then( function(result) {
         console.log(result);
   });
}

function addGif(source) {
   var gif = $("<img>");
   gif.attr("src",source);
   $(".jumbotron").prepend(gif);
}

function main() {
   time = 15;
   countDownTimer();
}

window.onload = function() {
   main();
}