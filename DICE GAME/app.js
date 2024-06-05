var user_number = document.getElementById("user_number");
var random_number = document.getElementById("random_number")
var result = document.getElementById("result")
var win_loss_color = document.getElementById("win_loss_color")
var round_counts = document.getElementById("round_counts")
var win_counts = document.getElementById("win_counts")
var loss_counts = document.getElementById("loss_counts")
var final_result = document.getElementById("final_result");

var count = 10;
var win = 0;
var loss = 0;


function try_your_luck(userNumber) {
    console.log(userNumber);
    var randomNumber = Math.random() * 6;
    var ceil = Math.ceil(randomNumber);
    console.log(ceil);
    user_number.innerText = userNumber;
    random_number.innerText = ceil;
    round_counts.innerText = --count;


    if (ceil === userNumber) {
        console.log("user wins");
        result.innerText = "You Won";
        result.style.color = "white";
        win_loss_color.style.transform = "scale(1.1)";
        win_loss_color.style.transitionDuration = "1s";
        win_loss_color.style.backgroundColor = "#79D64B";
        win_counts.innerText = ++win;

    } else {
        console.log("you loss");
        result.innerText = "You Loss";
        result.style.color = "white";
        result.style.transitionDuration = "1s";
        win_loss_color.style.transform = "scale(1.0)"
        win_loss_color.style.backgroundColor = "red";
        loss_counts.innerText = ++loss;
    }

    finalResult();
}

function finalResult() {
    if (count == 0) {
        if (win >= 3) {
            console.log("you won");
            final_result.innerText = "Congratulations ! You Won"
            final_result.style.color = "#79D64B";

        } else {
            console.log("you loss");
            final_result.innerText = "Sorry You Loss Try Again"
            final_result.style.color = "red";

        }
        count = 10;
        win = 0;
        loss = 0;
        round_counts.innerText = count;
        win_counts.innerText = win;
        loss_counts.innerText = loss;

    }
}
// \end{code}