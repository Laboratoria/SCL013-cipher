/* import output from "./index.js";
 */
const cipher = {
  encode: function (offset, string) {

    
    //1. Pasa el mensaje a mayúscula
    string = string.toUpperCase();
    let encodedString = "";
    //2. Itera cada letra y espacio del mensaje
    for (let i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
  
      //3.a. Si el cód. ascii es 32 (espacio), se queda como espacio
      if (ascii === 32){
        ascii = 32;
      } else if (ascii === 209) {
        ascii = 209;
      } else if (ascii >= 97 && ascii <= 122) {
        //3.b. Extra: para cifrar minúsculas
        ascii = (ascii - 122 + parseInt(offset)) % 26 + 122;

        }
        else if (ascii >= 65 && ascii <= 90) { //3.c. Para cifrar mayúsculas
        ascii = (ascii - 65 + parseInt(offset)) % 26 + 65;
      }
      //4. Cada letra cifrada se guarda en encodedString
      encodedString += String.fromCharCode(ascii);
    }
    //5. Se muestra encodedString en el text area de resultado
    return encodedString;
    //window.scrollTo(0, 1000); //6. Para mover navegador al resultado
  },
  
  decode: function (offset, string) {
    //1. Pasa el mensaje a mayúscula
    string = string.toUpperCase();
    let decodedString = "";
     //2. Itera cada letra y espacio del mensaje
    for (let i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
      
      //3.a. Si el cód. ascii es 32 (espacio), se queda como espacio
      if (ascii === 32) {
        ascii = 32;
      } else if (ascii === 209) {
          ascii = 209;
        } else if (ascii != 32) { //3.b. Si el cód. ascii no es 32 (espacio), se descifra
        ascii = (ascii - 65 - parseInt(offset)) % 26 + 65;
      }

      //4. Si el cód. ascii descifrado es menor que 65, pero no es 32, se le suma 26 para que no vaya hacia atrás (más allá de la "A") y se devuelva por Z, Y, X... etc.
      if (ascii < 65 && ascii != 32) {
        ascii = ascii + 26;
      }
      //5. Cada letra descifrada se guarda en decodedString
      decodedString += String.fromCharCode(ascii);
    }
    //&. Se muestra decodedString en el text area de resultado
    return decodedString;
    //window.scrollTo(0, 1000); //6. Para mover navegador al resultado
  }
} 


export default cipher;

/* (x - 65 + offset) % 26 + 65; */
 