import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";



const firebaseConfig = {
  apiKey: "AIzaSyC72TKT3l_-Cojyh_mgnqXSi_2ok1vpwPI",
  authDomain: "registration-form-80d82.firebaseapp.com",
  projectId: "registration-form-80d82",
  storageBucket: "registration-form-80d82.appspot.com",
  messagingSenderId: "332372885735",
  appId: "1:332372885735:web:8076dc919663eece1f6242",
  measurementId: "G-YH6CG2F46P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


// console.log(app);

const registerFormcollection = collection(db, "formCollection")

function checkUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      getFormInformationFromDb(); // Call the function to display user info
    } else {
      location.href = "./login.html";
    }
  });
}



async function addFormInformation(fisrtName, lastName, age, file) {
  try {
    const obj = {
      fisrtName: fisrtName,
      lastName: lastName,
      age: age,
      file: file
    };

    const docRef = await addDoc(registerFormcollection, obj);
    // getFormInformationFromDb();
    StudentName.value = "";
  } catch (e) {
    console.log(e);
  }
}

async function getFormInformationFromDb() {
  try {
    const querySnapshot = await getDocs(registerFormcollection);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const firstName = data.fisrtName;
      const lastName = data.lastName;
      const age = data.age;

      // Display the information
      const userInfoElement = document.getElementById("user-info");
      userInfoElement.innerHTML = `
        <h2>${firstName} ${lastName}</h2>
        <p>Age: ${age}</p>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}



const signup = (email, password, file) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const imageRef = await ref(storage, `user/${user.uid}`);
      const url = await uploadImage(imageRef, file)
      location.href = "./login/login.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage)
    });
}

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      location.href = "../file/index.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage)
    });
}



const uploadImage = async (imgRef, file) => {

  try {

    await uploadBytes(imgRef, file)
    const url = await getDownloadURL(imgRef)
    return url;

  } catch (error) {
    console.log(error)

  }
}

const signout = () => {
  signOut(auth).then(() => {
    location.href = "../login/login.html";
  }).catch((error) => {
    console.log(error);
  });
}

export {
  signup,
  checkUser,
  login,
  addFormInformation,
  signout,
  getFormInformationFromDb
}