import cipher from './cipher.js';

//DEBERÍA FUNCIONAR
//VARIABLES GLOBALES
let code;

//DOM
//Botones, select, textarea
const randomCode = document.getElementById("random-code");
const userName = document.getElementById("username");
const codeBtn = document.getElementById("code-btn");
const codeEnterBtn = document.getElementById("code-btn-enter");
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
const enterCodeBox = document.getElementById("enter-code-box");
const main = document.getElementById("main-homepage");
const userCode = document.getElementById("user-code");


//Event listeners
codeBtn.addEventListener("click", giveCodeFn);
codeEnterBtn.addEventListener("click", enterWithCodeFn);
enterBtn.addEventListener("click", enterFn);
backBtn.addEventListener("click", backFn);
cipherBtn.addEventListener("click", () => { 
  output.innerHTML = cipher.encode(select.value, input.value);
} );
decipherBtn.addEventListener("click", () => {
  output.innerHTML = cipher.decode(select.value, input.value);
});


//FUNCIONES

//Generar código
function giveCodeFn(event) {
  if (userName.value === "") {
    alert("Ingresa un nombre de usuario");
  } else {
    code = Math.floor((9999 - 1000) * Math.random()) + 1000;
    randomCode.innerHTML = `${code}`;
    enterCodeBox.removeAttribute('class', 'hidden');
    //mostrar caja donde se muestra el código y el "Entrar"
  }

  event.preventDefault()


}

//Ingresar a la app
function enterFn(event) {
  home.setAttribute("class", "hidden"); //oculta el código de ingreso
  app.removeAttribute("class", "hidden"); //muestra la app
  main.removeAttribute("id", "main-homepage");
  main.setAttribute("id", "main-app");//to increase main height
  event.preventDefault();


}

//Ingresar a la app con código ya generado (para la parte que recibe el código de su "amante")
function enterWithCodeFn(event) {
  if (userCode.value === "") {
    alert("Debes ingresar un código para poder entrar a la aplicación.");
  } else if (userCode.value.length != 4) {
    alert("El código debe tener 4 caracteres, vuelve a intentarlo.");
  } else {
    home.setAttribute("class", "hidden"); //oculta el código de ingreso
    app.removeAttribute("class", "hidden"); //muestra la app
    main.removeAttribute("id", "main-homepage");
    main.setAttribute("id", "main-app");//to increase main height
  }
  event.preventDefault();
}

//Regresar a la página de inicio
function backFn() {
  location.reload(true);
  window.scrollTo(0, 0); //to go to the top of the page

}


export default output;
