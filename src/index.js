import cipher from './cipher.js';


//párrafo donde se muestra el código
const randomCode = document.getElementById("random-code");

//input donde se ingresar el username
const userName = document.getElementById("username");

//botón que muestra el código
const codeBtn = document.getElementById("code-btn");

//esta funcion espera la funcion y orden que esta entre comillas
//giveCodeFn es cuando se activa la funcion
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

function enterFn(event) {



  const content = document.getElementById("content");

  content.innerHTML = "";
  content.innerHTML = `

      <div id=selection>
      <h4> Selecciona el numero de desplazamiento</h4>
      <select id="desplazamiento" name="desplazamiento" onblur="verificarDesplazamiento(this)" class="numero" onchangue="cambioNumero" size="1">
      <option value>Selecciona</option>
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
      <option value=4>4</option>
      <option value=5>5</option>
      <option value=6>6</option>
      <option value=7>7</option>
      <option value=8>8</option>
      <option value=9>9</option>
      <option value=10>10</option>
      <option value=11>11</option>
      <option value=12>12</option>
      <option value=13>13</option>
      <option value=14>14</option>
      <option value=15>15</option>
      <option value=16>16</option>
      <option value=17>17</option>
      <option value=18>18</option>
      <option value=19>19</option>
      <option value=20>20</option>

      </div>


      <div id="cipher-decipher">
      
    
      <h4>Escribe tu texto acá</h4>
      <textarea id="decipher" name="">
      hola
      </textarea>

      <div id="button-box">
      <button id="cipher-btn">Cifrar</button>
      <button id="decipher-btn">Descifrar</button>

      </div>

      <h4>Este es el texto cifrado</h4>
      <textarea id="cipher" name="">
      lkas
      </textarea>

      <div id="send-button.box">
      <button id="send-btn">Enviar mensaje</button>
      </div>
      
      <div id="back-button.box">
      <button id="back-btn">Volver al inicio</button>
      </div>


    </div>

  
  
    `
    event.preventDefault();
    
//boton que cifra, descifra, envia y vuelve//
const cipherBtn = document.getElementById("cipher-btn");
const decipherBtn = document.getElementById("decipher-btn");
const sendBtn = document.getElementById("send-btn");
const backBtn = document.getElementById("back-btn");

cipherBtn.addEventListener("click", cipherFn);
decipherBtn.addEventListener("click", decipher);
sendBtn.addEventListener("click", send);
backBtn.addEventListener("click", backFn);


 
}


function cipherFn() {
  alert("Cifrando mensaje (se supone");
}

function decipher() {
  alert("Descifrando mensaje (se supone)");
}
function send() {
  alert("enviando mensaje(se supone)");
}

function backFn(){
  location.reload(true);

}
 function verificarDesplazamiento(){
 indiceSelect= document.getElementById("desplazamiento").selectedIndex;
 }
 
console.log(cipher);
