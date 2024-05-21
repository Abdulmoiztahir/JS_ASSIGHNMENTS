var min_html = document.getElementById("minutes");
var sec_html = document.getElementById("seconds");
var ms_html = document.getElementById("milliseconds");
var start_btn =document.getElementById("start_btn");

var minute = 0;
var second = 0;
var milliSecond = 0;


var interval;

function start() {
    interval = setInterval(function () {
        milliSecond++;
        if (milliSecond >= 90) {
            second++; 
            milliSecond = 0 ;          
        }
        if (second >= 59){
            minute++;
            second = 0 ;
        }
        ms_html.innerText = milliSecond < 10 ? "0" + milliSecond : milliSecond;
        sec_html.innerText = second < 10 ? "0" + second : second ;
        min_html.innerText =  minute < 10 ? "0" + minute  : minute  ;
        start_btn.disabled = true;
        start_btn.style.backgroundColor = "gray";

    }, 10)
}

function stop() {
    clearInterval(interval)
    start_btn.disabled = false;
    start_btn.style.backgroundColor = "rgb(7, 136, 22)";

}

function reset() {
    clearInterval(interval)
    minute = 0;
    second = 0;
    milliSecond = 0;
    min_html.innerText = "0" + 0 ;
    sec_html.innerText = "0" + 0 ; 
    ms_html.innerText = "0" + 0 ; 
    start_btn.disabled = false;
    start_btn.style.backgroundColor = "rgb(7, 136, 22)";

}



