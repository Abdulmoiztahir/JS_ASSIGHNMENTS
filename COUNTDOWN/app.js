var months = document.getElementById("months")
var days = document.getElementById("days")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")

var eidDay = new Date("June 16 2024");
eidDay = eidDay.getTime("June 16 2024");

setInterval(function(){
    var now = new Date();
    now = now.getTime();
    var diff = eidDay - now;
    var monthsLeft ="Months Left" + "\n" + Math.floor(diff / 1000 / 60 / 60 / 24 / 30 );
    var daysLeft ="Days Left" + "\n" + Math.floor(diff / 1000 / 60 / 60 / 24 );
    var hoursLeft ="Hours Left" + "\n" + Math.floor(diff / 1000 / 60 / 60 );
    var minutesLeft ="Minutes Left" + "\n" + Math.floor(diff / 1000 / 60 );
    var secondsLeft ="Seconds Left" + "\n" + Math.floor(diff / 1000 );



    months.innerText = monthsLeft;
    days.innerText = daysLeft;
    hours.innerText = hoursLeft;
    minutes.innerText = minutesLeft;
    seconds.innerText = secondsLeft;

    

}, 1000)


