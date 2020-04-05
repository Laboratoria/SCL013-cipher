const cipher = {
  encode: function (offset, string) {
    //1. Transformar input a mayúsculas
    string = string.toUpperCase();
    console.log(string);
    let encodedString = "";
    //2. Transformar input de number a string
    //3. Iterar cada una de las letras del string
    for(let i = 0; i < string.length; i++) {
      //console.log(string[i]);
      //console.log(string.charCodeAt(i));
    //4. Convertir letra a código y guardarla en x
      let x = string.charCodeAt(i);
    //5. Utilizar la fórmula y guardar resultado en x
      x = (x - 65 + offset) % 26 + 65;
    //6. Convertir código en letra e ir guardando en encodedString
      encodedString += String.fromCharCode(x);
      
    }
    return encodedString;
  },
  
  decode: function (offset, string) {
    //1. Transformar input a mayúsculas
    string = string.toUpperCase();
    let decodedString = "";
    //2. Transformar input de number a string
    //3. Iterar cada una de las letras del string
    for (let i = 0; i < string.length; i++) {
      let x = string.charCodeAt(i);
      x = (x - 65 - offset) % 26 + 65;
      console.log(x);
      if (x === 58) {
        x = 32;
      } else if (x === 60) {
        x = 86;
      } 
      decodedString += String.fromCharCode(x);
      
    }
    return decodedString;
  }
} 


export default cipher;

/* (x - 65 + offset) % 26 + 65; */
 