import cipher from './cipher.js';

//VARIABLES GLOBALES
let code;

//DOM
//Botones, select, textarea
const randomCode = document.getElementById("random-code");
const userName = document.getElementById("username");
const codeBtn = document.getElementById("code-btn");
const enterBtn = document.getElementById("enter-btn");
const cipherBtn = document.getElementById("cipher-btn");
const decipherBtn = document.getElementById("decipher-btn");
//const sendBtn = document.getElementById("send-btn");
const backBtn = document.getElementById("back-btn");
const input = document.getElementById("input");
const output = document.getElementById("output");
const select = document.getElementById("desplazamiento");
const home = document.getElementById("home");
const app = document.getElementById("app");

//Event listeners
codeBtn.addEventListener("click", giveCodeFn);
enterBtn.addEventListener("click", enterFn);
backBtn.addEventListener("click", backFn);
cipherBtn.addEventListener("click", myCodingFn);
decipherBtn.addEventListener("click", myDecodingFn);


//FUNCIONES

//Generar código
function giveCodeFn(event) {
  if (userName.value === "") {
    alert("Ingresa un nombre de usuario");
  } else {
    code = Math.floor((9999 - 1000) * Math.random()) + 1000;
    randomCode.innerHTML = `${code}`;
  }

  event.preventDefault()


}

//Ingresar a la app
function enterFn(event) {
  home.setAttribute("class", "hidden"); //oculta el código de ingreso
  app.removeAttribute("class", "hidden"); //muestra la app
  event.preventDefault();


}


//Regresar a la página de inicio
function backFn() {
  location.reload(true);

}

//Retornar funciones de cifrar/descifrar 
function myCodingFn() {
  return cipher.encode(select.value, input.value);
}

function myDecodingFn() {
  return cipher.decode(select.value, input.value);
}

export default output;
