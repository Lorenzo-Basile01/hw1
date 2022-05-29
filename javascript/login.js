const errors = [];
for(let i = 0; i<1;i++){
  errors[i] = 0;
}
// event listeners

const form = document.querySelector("form");

form.querySelector("#password").addEventListener('blur',checkPassword);

form.querySelector("#email").addEventListener('blur',checkEmail);

form.addEventListener("submit", checkSubmit);

function checkPassword(event){
    let password = event.currentTarget;
  
    if(password.parentNode.parentNode.querySelector(".errore")!== null)
    document.querySelector(".password").parentNode.querySelector(".errore").remove();
  
    let pass_l = password.value.length; 
    /* if(!validatePassword(password.value)){
      const error = "formato password errato almeno 1 maiuscola, almeno 1 carattere speciale, almeno 1 numero, min 8 lettere";
      const element = document.createElement("div");
      element.innerText = error;
      element.classList.add("errore");
      if(password.parentNode.parentNode.querySelector(".errore")=== null)
      password.parentNode.parentNode.appendChild(element);
      errors[0] = 0;
    }else  */if(pass_l === 0){//per fare loggare l'admin con passw semplificata
      const error = "password richiesta";
      const element = document.createElement("div");
      element.innerText = error;
      element.classList.add("errore");
      if(password.parentNode.parentNode.querySelector(".errore")=== null)
      password.parentNode.parentNode.appendChild(element);
      errors[0] = 0;  
    }
    
    
  }
function checkEmail(event){
    let email = event.currentTarget;
  
    if(email.parentNode.parentNode.querySelector(".errore")!== null)
    document.querySelector(".email").parentNode.querySelector(".errore").remove();
  
    let email_l = email.value.length;
    if(email_l === 0){
        const error = "email richiesta";
        const element = document.createElement("div");
        element.innerText = error;
        element.classList.add("errore");
        if(email.parentNode.parentNode.querySelector(".errore")=== null)
        email.parentNode.parentNode.appendChild(element);
        errors[1] = 0;
    }else if(!validateEmail(email.value)){
      const error = "email non valida";
      const element = document.createElement("div");
      element.innerText = error;
      element.classList.add("errore");
      if(email.parentNode.parentNode.querySelector(".errore")=== null)
      email.parentNode.parentNode.appendChild(element);
      errors[1] = 0;
  }
}
  function checkSubmit(event) {
    if (errors[0] === 0 || errors[1] === 0){

      event.preventDefault();

      if(form.querySelector(".submit").parentNode.querySelector(".errore")!== null)
        form.querySelector(".submit").parentNode.querySelector(".errore").remove();

      const error = "compilare tutti i campi correttamente";
      const element = document.createElement("div");
      element.innerText = error;
      element.classList.add("errore");
      if(form.querySelector(".submit").parentNode.querySelector(".errore")===null)
      form.querySelector(".submit").parentNode.appendChild(element);
    }
      
  }


  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&-\*])(?=.{8,25})/;
    return password.match(re);
  }