


var c = setInterval(countdown, 1000);
function countdown() {
   console.log("tick");
   var now = new Date().getTime();
   futureTime = new Date(2019, 11, 6, 16, 0, 0);
   // get the difference of now and futureTime
   var diff = futureTime.getTime() - now;
   // display the difference in html
   var str = msToTime(diff); 
   document.getElementById('timer').innerHTML = str;
   if(diff <= 0) {
      clearInterval(c);
      document.getElementById('timer').innerHTML = "You're done son!";
   }

}

function msToTime(duration) {
   var milliseconds = parseInt((duration%1000)/100)
       , seconds = parseInt((duration/1000)%60)
       , minutes = parseInt((duration/(1000*60))%60)
       , hours = parseInt((duration/(1000*60*60))%24);
       var days = Math.floor(duration / (1000 * 60 * 60 * 24));

   hours = (hours < 10) ? "0" + hours : hours;
   minutes = (minutes < 10) ? "0" + minutes : minutes;
   seconds = (seconds < 10) ? "0" + seconds : seconds;

   return days + ":" + hours + ":" + minutes + ":" + seconds;
}