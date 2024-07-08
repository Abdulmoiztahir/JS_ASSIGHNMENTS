import {
   signup,
   addFormInformation   ,
} from "./utils.js";

let signup_email = document.getElementById("floating_email")
let signup_password = document.getElementById("floating_password")
let signup_first_name = document.getElementById("floating_first_name")
let signup_last_name = document.getElementById("floating_last_name")
let sign_up_age = document.getElementById("floating_age")
let signup_file = document.getElementById("floating_file")
let signup_btn = document.getElementById("signup_btn")

signup_btn.addEventListener("click", () => {
   //  console.log(signup_email.value, signup_password.value,signup_file.files[0])
   signup(signup_email.value, signup_password.value, signup_file.files[0]);
   // console.log(addFormInformation(signup_first_name.value,signup_last_name.value,sign_up_age.value));
   addFormInformation(signup_first_name.value,signup_last_name.value,sign_up_age.value,signup_file.value) 
})

