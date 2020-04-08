//import cipher from './cipher.js';

//console.log(cipher);

//llamando a setNombre y devolviendolo en sec2(nombre de usuario)
function setNombre(){
    let name=document.getElementById("nombre").value;
    let doc = document.getElementById("saludo");
        doc.innerText="Conversación con "+" "+name;
    document.getElementById("nombre2").innerText=name+" tienes";    
   }