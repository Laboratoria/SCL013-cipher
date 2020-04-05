import cipher from './cipher.js';


//párrafo donde se muestra el código
const randomCode = document.getElementById("random-code");

//input donde se ingresar el username
const userName = document.getElementById("username");

//botón que muestra el código
const codeBtn = document.getElementById("code-btn");

codeBtn.addEventListener("click", giveCodeFn);
let code;

function giveCodeFn(event) {
  if (userName.value === "") {
    alert("Ingresa un nombre de usuario");
  } else {
    code = Math.floor((9999 - 1000) * Math.random()) + 1000;
    randomCode.innerHTML = `${code}`;
  }

  event.preventDefault()

  
}



//botón que ingresa a la app
const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", enterFn);

function enterFn() {

  const content = document.getElementById("content");

  content.innerHTML = "";
  content.innerHTML = `
    <div id="cipher-decipher">

      <h4>Escribe tu texto acá</h4>
      <textarea id="decipher" name="">
      hola
      </textarea>

      <h4>Este es el texto cifrado</h4>
      <textarea id="cipher" name="">
      lkas
      </textarea>
    </div>
  
  `
}



function cipherFn() {
  alert("Cifrando mensaje (se supone");
};

function decipher() {
  alert("Descifrando mensaje (se supone)");
};


//console.log(cipher);
console.log(cipher.encode(5, "Hola, nos vemos en ID TELOS A LAS CINCO CUARENTA Y CINCO DE LA TARDE"));
console.log(cipher.decode(5, "MTQF1?STX?AJRTX?JS?NI?YJQTX?F?QFX?HNSHT?HZFWJSYF?D?HNSHT?IJ?QF?YFWIJ"));