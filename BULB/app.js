// var btn = document.getElementById("btn");
// var LIT_BULB_URL = "./img/41774-removebg-preview.png";
// var UNLIT_BULB_URL = "./img/41849-removebg-preview.png";



// var lightSwitch = document.getElementById("btn");
// var lightBulb = document.getElementById("bulb");


// function toggleLight() {
//   if (lightBulb.src === LIT_BULB_URL) {
//     lightBulb.src = UNLIT_BULB_URL;
//     lightBulb.style.height = "400px";
//     lightBulb.style.width = "400px"; 
//     lightBulb.style.filter = "drop-shadow(0px 0px 5px white)";
//     btn.innerText = "ON";
    
//   } else {
//     lightBulb.src = LIT_BULB_URL;
//     lightBulb.style.height = "400px";
//     lightBulb.style.width = "400px";
//     lightBulb.style.filter = "drop-shadow(0px 0px 150px rgb(255, 251, 0))";
//     btn.innerText = "OFF";
//   }
// }

// lightSwitch.addEventListener("click", toggleLight);

var btn = document.getElementById("btn");
var bt2n = document.getElementById("btn_2");
var picture =document.getElementById("picture"); 



btn.addEventListener("click",function(){
    picture.src="./img/41774-removebg-preview.png";
    picture.style.height="400px"
    picture.style.width="400px"
    picture.style.filter = "drop-shadow(0px 0px 150px rgb(255, 251, 0))";
    
    
  })
  bt2n.addEventListener("click",function () {
    picture.src = "./img/41849-removebg-preview.png";
    picture.style.height="400px"
    picture.style.width="400px"
    picture.style.filter = "drop-shadow(0px 0px 5px white)";

    
})
