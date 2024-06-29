import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { 
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDRqPhm4i_urlYZGiMgrW6QrRfWWbho6vw",
    authDomain: "login-page-cc461.firebaseapp.com",
    projectId: "login-page-cc461",
    storageBucket: "login-page-cc461.appspot.com",
    messagingSenderId: "126464006724",
    appId: "1:126464006724:web:64efc15abeef6019f2fa11",
    measurementId: "G-63BQYGW69D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signupemail = document.getElementById("signupemail")
const signuppassword = document.getElementById("signuppassword")
const createacountbutton = document.getElementById("createacountbutton")
const signinemail = document.getElementById("signinemail")
const signinpassword = document.getElementById("signinpassword")
const loginbutton = document.getElementById("loginbutton")
const authcontainer = document.getElementById("authcontainer")
const usercontainer = document.getElementById("usercontainer")
const useremail = document.getElementById("useremail")
const logout = document.getElementById("logout")

createacountbutton.addEventListener("click", createUserAccount)
loginbutton.addEventListener("click", logIn)
logout.addEventListener("click", logOut)

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      authcontainer.style.display = "none";
      usercontainer.style.display = "block";
      useremail.innerText = user.email;
      useremail.style.color = "#0f0"
    } else {
        authcontainer.style.display = "block";
        usercontainer.style.display = "none";
        useremail.innerText = user.email;
        useremail.style.color = "#0f0"
    }
  });

function createUserAccount(){
    console.log(signupemail.value);
    console.log(signuppassword.value);
    createUserWithEmailAndPassword(
        auth, 
        signupemail.value, 
        signuppassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });   
}

function logIn(){
    console.log(signinemail.value);
    console.log(signinpassword.value);
    signInWithEmailAndPassword(
        auth,
        signinemail.value,
        signinpassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage  )
  });

}

function logOut() {
    signOut(auth).then(() => {
      }).catch((error) => {
      });
}