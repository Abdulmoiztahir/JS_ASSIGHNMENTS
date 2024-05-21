function getValue(x) {
    if (x === "=") {
        var toSolve = document.getElementById("screen").innerText;
        console.log(toSolve);
        var result = eval(toSolve);
        console.log(result);
        document.getElementById("screen").innerText = result;
        console.log(result);
    }
    else if (x === "delete") {
        document.getElementById("screen").innerText = null;
    }
    else {
        document.getElementById("screen").innerText += x;
    }
}