import { 
    checkUser,
    signout,
    getFormInformationFromDb
 } from "../utils.js";

checkUser();

let logout_btn = document.getElementById("logout_btn")

logout_btn.addEventListener("click",()=>{
    signout();
})

getFormInformationFromDb().then((userInfo) => {
    const userInfoElement = document.getElementById("user-info");
    userInfoElement.innerHTML = `
        <h2>${userInfo.firstName} ${userInfo.lastName}</h2>
        <p>Age: ${userInfo.age}</p>
        <img src="${userInfo.profilePicUrl}" alt="Profile Picture">
    `;
}).catch((error) => {
    console.log(error);
})