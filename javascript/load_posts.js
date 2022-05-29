
let array = [];

fetch("load_post.php").then(onResponse).then(onJson);

function onResponse(response){
    console.log(response);
    return response.json();
}
function onJson(json){
    const section = document.querySelector("#posts");
    console.log(json);
    
    if(json[0].userid === -1){
    let sec = document.createElement('section');
    section.appendChild(sec);

    let div1 = document.createElement("div");
    sec.appendChild(div1);

    let div2 = document.createElement("div");
    div2.classList.add('foto');
    div1.appendChild(div2);
    
    let h5 = document.createElement("h5");
    h5.innerText = json[0].content.descrizione;
    div1.appendChild(h5);

    let immagine = document.createElement('img');
    immagine.classList.add('immagini');

    console.log(json[0].content.url);
    immagine.src = json[0].content.url;
    div2.appendChild(immagine);
    
    }
    for(let i of json){
    let sec = document.createElement('section');
    section.appendChild(sec);

    let div0 = document.createElement("div");
    div0.classList.add('usertime');
    sec.appendChild(div0);
    
    let h3 = document.createElement("h3");
    h3.innerText = i.name +" "+ i.surname;
    div0.appendChild(h3);

    let h6 = document.createElement("h6");
    h6.innerText = i.time;
    div0.appendChild(h6);

    let div2 = document.createElement("div");
    div2.classList.add('content');
    sec.appendChild(div2);

    let immagine = document.createElement('img');
    immagine.classList.add('immagini');

    console.log(i.content.url);
    immagine.src = i.content.url;
    div2.appendChild(immagine);

    let div3 = document.createElement("div");
    div3.classList.add('bottoni');
    div2.appendChild(div3);

    let p = document.createElement("p");
    p.innerText = i.content.descrizione;
    p.classList.add('descrizione');
    div3.appendChild(p);
    
    let nlikes = document.createElement("div");
    nlikes.classList.add('like');
    div3.appendChild(nlikes);

    let numero = document.createElement("div");
    numero.classList.add('numero');
    nlikes.appendChild(numero);
    numero.innerText = i.nlikes;

    let im = document.createElement('img');
    
    im.dataset.id_post = i.postid;
    im.classList.add('cuore');

    if(i.liked == 'true') im.src = "img/cuore-pieno.png";
/*       console.log((numero++).toString());
      numero.innerText = (numero++).toString(); */
    else im.src = "img/cuore-vuoto.png";

    nlikes.appendChild(im);
    im.addEventListener("click", addLike);

  }
}

function addLike(event) {
  let cuore = event.currentTarget;

  let numero = parseInt(cuore.parentNode.querySelector(".numero").innerText);

  let file = "cuore-vuoto.png";
  let string = cuore.src.length;
  let stringL = string - file.length;
  if (cuore.src.slice(stringL, string) == "cuore-vuoto.png"){
    cuore.src = "img/cuore-pieno.png";
    numero++;
    cuore.parentNode.querySelector(".numero").innerText = (numero).toString();
    fetch("like_comm_inc.php?val="+1+"&idpost="+cuore.dataset.id_post);
  }
  else{
    cuore.src = "img/cuore-vuoto.png";
    numero--;
    cuore.parentNode.querySelector(".numero").innerText = (numero).toString();
    fetch("like_comm_inc.php?val="+0+"&idpost="+cuore.dataset.id_post);
  }
}
