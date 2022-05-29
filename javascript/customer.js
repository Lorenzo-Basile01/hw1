const form = document.querySelector("#form");

form.querySelector("#cerca").addEventListener("click", search);

form.addEventListener("submit", checkSubmit);

let contenuto;

function search(event) {

  event.preventDefault();
  rest_url = "fetch_cane.php";
  /* console.log("URL: " + rest_url); */
  if(document.querySelector('.album-view').innerHTML !== null){
  document.querySelector('.album-view').innerHTML = "";
  document.querySelector('.album-view').classList.remove("hidden");
  }
  for(let i = 0; i<9; i++)
  fetch(rest_url).then(onResponse).then(onJson);
}

function onResponse(response) {
  console.log("Risposta ricevuta");
  return response.json();
}

function onJson(json) {
  console.log(json);
  const immagine = document.querySelector(".album-view");
  const img = document.createElement("img");
  img.addEventListener("click", onChoose);
  img.src = json.message;
  immagine.appendChild(img);
  
}

function onChoose(event) {
  event.preventDefault();
  let boxes = form.querySelectorAll('img');
  
  for(let box of boxes){
    if(box.classList.contains('border'))
    box.classList.remove('border');
  }

  event.currentTarget.classList.add('border');
  contenuto = event.currentTarget.src;

  const mess = "immagine scelta inserisci una descrizione";
  const element = document.createElement("div");
  element.innerText = mess;
  element.classList.add("mess");
  if (form.querySelector("#botton").querySelector(".mess") === null)
  form.querySelector("#botton").appendChild(element);
}

function checkSubmit(event) {
  if (form.querySelector("#carica").querySelector(".mess") !== null)
    form
      .querySelector("#carica")
      .parentNode.querySelector(".mess")
      .remove();
  
  let descr = form.querySelector('#descrizione').value;

  if (contenuto !== undefined){
  let link = contenuto;
  const mess = "post caricato! Clicca un'altra immagine o cercane un'altra per creare un nuovo post";
  const element = document.createElement("div");
  element.innerText = mess;
  element.classList.add("mess");
  
  form.querySelector("#carica").appendChild(element);
  
  fetch("carica_post.php?link="+encodeURIComponent(link)+"&descrizione="+encodeURIComponent(descr));
  
  event.preventDefault();
  }else{
  event.preventDefault();
  const mess = "immagine non scelta cerca e scegline una";
  const element = document.createElement("div");
  element.innerText = mess;
  element.classList.add("mess");
  if (event.currentTarget.parentNode.querySelector(".mess") === null)
    event.currentTarget.parentNode.appendChild(element);
  }
  
}


