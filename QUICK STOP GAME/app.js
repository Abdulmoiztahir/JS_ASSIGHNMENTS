var number_html = document.getElementById("number");
var user_html = document.getElementById("uservalue");
var msg_html = document.getElementById("msg");
var start_html = document.getElementById("start")

var runningNumber = 0 ;
var interval ;

function start(){
    if(user_html.value) {
    interval = setInterval(function () {
        if (runningNumber >= 1000) {
            clearInterval(interval)
            runningNumber++;
            runningNumber = 0 ;
        number_html.innerText = runningNumber < 10 ? "0" + runningNumber  : runningNumber
        }else{
        runningNumber++;
        number_html.innerText = runningNumber < 10 ? "0" + runningNumber  : runningNumber
        start_html.disabled = true ; 
        start_html.style.backgroundColor = "gray"
        }
    }, 80)
    start_html.disabled = false ;
    start_html.style.backgroundColor = "rgb(0, 193, 0)"
}else{

            alert("number to daalo")
        }
   
}

function stop() {
    clearInterval(interval)
    if  (user_html.value == runningNumber) {
        msg_html.innerText = "You Win";
        msg_html.style.color = "rgb(0, 193, 0)";
    }else{
        msg_html.innerText = "You Lose";
        msg_html.style.color = "red";
    }
    runningNumber = 0 ;
    number_html.innerText = runningNumber < 10 ? "0" + runningNumber  : runningNumber;
    start_html.disabled = false ; 
    start_html.style.backgroundColor = "rgb(0, 193, 0)"
}