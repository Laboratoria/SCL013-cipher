//COMENTARIO MUY DE PRUEBA
import output from "./index.js";

const cipher = {
  encode: function (offset, string) {
    console.log(offset, string); //para probar
    string = string.toUpperCase();
    let encodedString = "";
    for (let i = 0; i < string.length; i++) {
      let x = string.charCodeAt(i);
      x = (x - 65 + parseInt(offset)) % 26 + 65;
      encodedString += String.fromCharCode(x);
    }
    console.log(encodedString);//para probar
    output.innerHTML = `${encodedString}`;
  },
  
  decode: function (offset, string) {
    console.log(offset, string); //para probar

    string = string.toUpperCase();
    let decodedString = "";
    for (let i = 0; i < string.length; i++) {
      let x = string.charCodeAt(i);
      x = (x - 65 - offset) % 26 + 65;
      if (x === 58) {
        x = 32;
      } else if (x === 60) {
        x = 86;
      }
      decodedString += String.fromCharCode(x);
    }
    console.log(decodedString); //para probar
    output.innerHTML = `${decodedString}`;
    
  }
} 


export default cipher;

/* (x - 65 + offset) % 26 + 65; */
 