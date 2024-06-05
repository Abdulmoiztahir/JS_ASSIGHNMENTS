var email = document.getElementById('email')
var password = document.getElementById('password')
var login_container = document.getElementById('login_container')
var home_container = document.getElementById('home_container')
var user_email = document.getElementById('user_email')
var note = document.getElementById('note')

function loginUser() {
  if (!email.value || !password.value)
    return alert("Please add email and password")
  localStorage.setItem("email", email.value)
  checkUserLogin();
}

function checkUserLogin() {
  var email = localStorage.getItem("email")
  if (email) {
    login_container.style.display = "none"
    home_container.style.display = "block"
    user_email.innerText = email
displayUserNotes()
  } else {
    login_container.style.display = "block"
    home_container.style.display = "none"
  }
}

checkUserLogin();

function logout() {
  localStorage.removeItem('email')
  checkUserLogin();
}

function submitNote() {
  var email = localStorage.getItem("email")

  var obj = {
    email: email,
    note: note.value,
  }
  saveValueToLocalStorage(obj)
  note.value = "";
}

function saveValueToLocalStorage(obj) {
  var notes = localStorage.getItem('notes')
  console.log(notes);
  if (notes) {
    notes = JSON.parse(notes);
    notes.push(obj);
    // console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    notes = [obj];
    // console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  } 
  displayUserNotes()
}

function displayUserNotes() {
  var notes = localStorage.getItem('notes')
  var list = document.getElementById('list')
  var email = localStorage.getItem("email") 
  if (notes) {
    notes = JSON.parse(notes)
    notes.forEach(function(data,ind){
      console.log(data);
      if (data.email === email) {
        var liElement = ` <li class="border rounded p-2 my-2">
        <p class = "font-medium">${data.note}</p> 
            <p>${data.email}</p>
          </li>`;
        list.innerHTML += liElement; 
      }
    })
  }
}
displayUserNotes()