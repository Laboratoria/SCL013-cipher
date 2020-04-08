//llamando a setNombre y devolviendolo en sec2(nombre de usuario)
function setNombre(){
    let name=document.getElementById("nombre").value;
    let doc = document.getElementById("saludo");
        doc.innerText="Conversación con "+" "+name;
    document.getElementById("nombre2").innerText=name+" tienes";    
   }

//se crea la función para comenzar las instrucciones
   function doCrypt(isDesencriptar) {

//se declara la variable de la clave       
    var shiftText = document.getElementById("shift").value;

//se condiciona con if para que solo ingresen números, si ingresan símbolos arroja una alerta    
    if (!/^-?\d+$/.test(shiftText)) {
        alert("Clave Inválida:Ingrese sólo números enteros positivos.");
        return;
    }

//se declara la variable de la clave y se condiciona con la fórmula del alfabeto normal sin ñ, para que pueda dar muchas vueltas a este
    var shift = parseInt(shiftText);
    if (isDesencriptar) 
       shift = (2080 - shift) % 26;
    
//se declara y se llama a la variable del texto    
       var textElem = document.getElementById("text");
    
//se integran los elementos al cifrado    
       textElem.value = caesarShift(textElem.value, shift);
}

//se crea la función integrando el texto y la clave
function caesarShift(text, shift) {
    
//se crea la variable de salida o resultado    
var result = "";

//declaramos para ir por cada letra o caracter
    for (var i = 0; i < text.length; i++) {

//declarando esta variable obtenemos el caracter que agregaremos        
        var c = text.charCodeAt(i);

//condicionamos y agregamos la fórmula para letras mayúsculas según alfabeto normal y codigo ASCII        
        if      (65 <= c && c <=  90) {
            result += String.fromCharCode((c - 65 + shift) % 26 + 65);
        }  // Uppercase

//condicionamos y agregamos la fórmula para letras minúsculas según alfabeto normal y codigo ASCII    
        else if (97 <= c && c <= 122) {
            result += String.fromCharCode((c - 97 + shift) % 26 + 97);
        }  // Lowercase

//adjuntamos para que el resultado salga con el caracter en la posición indicada (i)        
        else                          {result += text.charAt(i);}  // Copy
    }

//obtenemos el resultado    
    return result;
}
