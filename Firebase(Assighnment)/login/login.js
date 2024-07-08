import { login } from "../utils.js";

let email = document.getElementById("email")
let password = document.getElementById("password")
let login_btn = document.getElementById("login_btn")

login_btn.addEventListener("click",()=>{
    // console.log(email.value, password.value)
    login(email.value, password.value)
})