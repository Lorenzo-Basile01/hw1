const errors = [];
for (let i = 0; i < 6; i++) {
  errors[i] = 0;
}
// event listeners

const form = document.querySelector("#form");

form.querySelector(".password input").addEventListener("blur", checkPassword);

form.querySelector(".email input").addEventListener("blur", checkEmail);

form.querySelector(".name input").addEventListener("blur", checkName);

form.querySelector(".surname input").addEventListener("blur", checkSurname);

form.querySelector(".birthdate input").addEventListener("blur", checkBirthdate);

form
  .querySelector(".confirm_password input")
  .addEventListener("blur", checkC_Password);

form.addEventListener("submit", checkSubmit);

function checkPassword(event) {
  let password = event.currentTarget;

  if (password.parentNode.parentNode.querySelector(".errore") !== null)
    document
      .querySelector(".password")
      .parentNode.querySelector(".errore")
      .remove();

  let pass_l = password.value.length;
  if (!validatePassword(password.value)) {
    const error =
      "formato password errato almeno 1 maiuscola, almeno 1 carattere speciale, almeno 1 numero, min 8 lettere";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (password.parentNode.parentNode.querySelector(".errore") === null)
      password.parentNode.parentNode.appendChild(element);
    errors[0] = 0;
  } else if (pass_l === 0) {
    const error = "password richiesta";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (password.parentNode.parentNode.querySelector(".errore") === null)
      password.parentNode.parentNode.appendChild(element);
    errors[0] = 0;
  } else {
    errors[0] = 1;
    if (password.parentNode.parentNode.querySelector(".errore") !== null)
      document
        .querySelector(".password")
        .parentNode.querySelector(".errore")
        .remove();
  }
}
function checkEmail(event) {
  let email = event.currentTarget;

  if (email.parentNode.parentNode.querySelector(".errore") !== null)
    document
      .querySelector(".email")
      .parentNode.querySelector(".errore")
      .remove();

  let email_l = email.value.length;
  if (!validateEmail(email.value)) {
    const error = "email non valida";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (email.parentNode.parentNode.querySelector(".errore") === null)
      email.parentNode.parentNode.appendChild(element);
  } else if (email_l === 0) {
    const error = "email richiesta";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (email.parentNode.parentNode.querySelector(".errore") === null)
      email.parentNode.parentNode.appendChild(element);
    errors[1] = 0;
  } else {
    /* const form_data = {
    method: "post",
    body: new FormData(form),
    header: {
      "Access-Control-Allow-Origin": "http://localhost:*",
      "Access-Control-Allow-Credentials": true,
    },
  };
  console.log("fetcho"); */
    /* "http://localhost/hw1/ */
    fetch(
      "controllo_email.php?q=" +
        encodeURIComponent(String(email.value).toLowerCase())
    )
      .then(onResponse)
      .then(onJson);
  }
}
function onResponse(response) {
  return response.json();
}
function onJson(json) {
  const email = form.querySelector(".email input");

  console.log("onjson");
  console.log(json);
  if (json) {
    const error = "email gia usata";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (email.parentNode.parentNode.querySelector(".errore") === null)
      email.parentNode.parentNode.appendChild(element);
    errors[1] = 0;
  } else {
    errors[1] = 1;
    if (email.parentNode.parentNode.querySelector(".errore") !== null)
      document
        .querySelector(".email")
        .parentNode.querySelector(".errore")
        .remove();
  }
}
function checkName(event) {
  let nome = event.currentTarget;
  let nome_l = nome.value.length;
  if (nome_l === 0) {
    const error = "nome richiesto";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (nome.parentNode.parentNode.querySelector(".errore") === null)
      nome.parentNode.parentNode.appendChild(element);
    errors[2] = 0;
  } else {
    errors[2] = 1;
    if (nome.parentNode.parentNode.querySelector(".errore") !== null)
      document
        .querySelector(".name")
        .parentNode.querySelector(".errore")
        .remove();
  }
}
function checkSurname(event) {
  let surname = event.currentTarget;
  let cognome_l = surname.value.length;
  if (cognome_l === 0) {
    const error = "cognome richiesto";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (surname.parentNode.parentNode.querySelector(".errore") === null)
      surname.parentNode.parentNode.appendChild(element);
    errors[3] = 0;
  } else {
    errors[3] = 1;
    if (surname.parentNode.parentNode.querySelector(".errore") !== null)
      document
        .querySelector(".surname")
        .parentNode.querySelector(".errore")
        .remove();
  }
}
function checkBirthdate(event) {
  let birthdate = event.currentTarget;

  if (birthdate.parentNode.parentNode.querySelector(".errore") !== null)
    document
      .querySelector(".birthdate")
      .parentNode.querySelector(".errore")
      .remove();

  let now = new Date();
  let today = now.toISOString();
  if (birthdate.value > today.slice(0, 10)) {
    const error = "data successiva ad oggi...vieni dal futuro?";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (birthdate.parentNode.parentNode.querySelector(".errore") === null)
      birthdate.parentNode.parentNode.appendChild(element);
    errors[4] = 0;
  } else if (birthdate.value === "") {
    const error = "data non inserita";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (birthdate.parentNode.parentNode.querySelector(".errore") === null)
      birthdate.parentNode.parentNode.appendChild(element);
    errors[4] = 0;
  } else {
    errors[4] = 1;
    if (birthdate.parentNode.parentNode.querySelector(".errore") !== null)
      document
        .querySelector(".birthdate")
        .parentNode.querySelector(".errore")
        .remove();
  }
}
function checkC_Password(event) {
  let confirm_password = event.currentTarget;

  if (confirm_password.parentNode.parentNode.querySelector(".errore") !== null)
    document
      .querySelector(".confirm_password")
      .parentNode.querySelector(".errore")
      .remove();

  let confirm_password_l = confirm_password.value.length;
  let password = document.querySelector(".password input");
  if (confirm_password_l === 0) {
    const error = "conferma passw richiesta";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (
      confirm_password.parentNode.parentNode.querySelector(".errore") === null
    )
      confirm_password.parentNode.parentNode.appendChild(element);
    errors[5] = 0;
  } else if (confirm_password.value !== password.value) {
    const error = "password inserite diverse";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (
      confirm_password.parentNode.parentNode.querySelector(".errore") === null
    )
      confirm_password.parentNode.parentNode.appendChild(element);
    errors[5] = 0;
  } else {
    errors[5] = 1;
    if (
      confirm_password.parentNode.parentNode.querySelector(".errore") !== null
    )
      document
        .querySelector(".confirm_password")
        .parentNode.querySelector(".errore")
        .remove();
  }
}
/* const nome = form.querySelector(".name input");
const password = form.querySelector(".password input");
const email = form.querySelector(".email input");
const surname = form.querySelector(".surname input");
const birthdate = form.querySelector(".birthdate input");
const confirm_password = form.querySelector(".confirm_password input");

if (document.querySelector(".error") !== null || 
  password.value === null || email.value === null || nome.value === null || surname.value === null ||
  birthdate.value === null || confirm_password.value === null){
    
    form.querySelector(".submit inout").removeEventListener
} */

function checkSubmit(event) {
  if (
    errors[0] === 0 ||
    errors[1] === 0 ||
    errors[2] === 0 ||
    errors[3] === 0 ||
    errors[4] === 0 ||
    errors[5] === 0
  ) {
    event.preventDefault();
    const error = "compilare tutti i campi";
    const element = document.createElement("div");
    element.innerText = error;
    element.classList.add("errore");
    if (
      form.querySelector(".submit").parentNode.querySelector(".errore") === null
    )
      form.querySelector(".submit").parentNode.appendChild(element);
  } /* else{
    
    const errore = document.querySelector(".errore");
    errore.innerText = "benvenuto"+form.querySelector(".name input").value+"!";
    
  }  */
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePassword(password) {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&-\*])(?=.{8,25})/;
  return password.match(re);
}
