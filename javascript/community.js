const nome = document.querySelector(".name input");
const cognome = document.querySelector(".surname input");
const form = document.getElementById("form");
const view = document.querySelector("#view");
console.log(form);
form.addEventListener("submit", search);

function search(event) {
  if (nome.value === "") {
    alert("Nome mancante!");
    event.preventDefault();
  }

  if (cognome.value === "") {
    alert("Cognome mancante!");
    event.preventDefault();
  }

  const form_data = {
    method: "post",
    body: new FormData(form),
    header: {
      "Access-Control-Allow-Origin": "http://localhost:*",
      "Access-Control-Allow-Credentials": true,
    },
  };
  console.log("fetcho");
  fetch("http://localhost/hw1/cercautenti.php", form_data).then(onResponse).then(onJson);
  event.preventDefault();
}

function onResponse(response) {
  console.log("on response");

  console.log(response);

  return response.json();
}

function onJson(json) {

  if (form.querySelector(".mess") !== null)
    form
      .parentNode.querySelector(".mess")
      .remove();

  view.innerHTML="";

  if(json.length == 0){
    const mess = "utente non esistente";
    const element = document.createElement("div");
    element.innerText = mess;
    element.classList.add("mess");
    if (form.querySelector(".mess") === null)
      form.appendChild(element);
    return;
  }

  
  console.log(json);
for(let i of json){
  const nome = document.createElement("span");

  const cognome = document.createElement("span");

  const email = document.createElement("span");

  const dataNascita = document.createElement("span");

  const n_likes = document.createElement("span");

  nome.textContent = i.dati.nome;
  cognome.textContent = i.dati.cognome;
  email.textContent = i.dati.email;
  dataNascita.textContent = i.dati.data_nascita;
  n_likes.textContent = "likes messi:"+ i.n_likes;

  view.appendChild(nome);
  view.appendChild(cognome);
  view.appendChild(email);
  view.appendChild(dataNascita);
  view.appendChild(n_likes);

  view.classList.remove('hidden');
}
}
