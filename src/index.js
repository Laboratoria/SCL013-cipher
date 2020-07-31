window.onload = function(){
    /*Estas variables enlasan al boton codificar y decodificar*/
        const btnEncode = document.getElementById("enviar1");
        const btnDecode = document.getElementById("enviar2");
    /*y estas enlazan al textarea readonly*/
        const textoEn = document.getElementById("codificado1");
        const textoDe = document.getElementById("codificado2");
    
    /*caracteristicas del btnEncode*/
        btnEncode.addEventListener('click', () => {
            
            let ingresoEn = document.getElementById("codificar1").value;
            let desplaza = document.getElementById("desplazamiento").value;
            let send = window.cipher.encode(ingresoEn,desplaza);
            textoEn.innerHTML = send;
        })
    /*Caracteristicas del btnDecode*/ 
        btnDecode.addEventListener('click', () => {
        
            let ingresoDe = document.getElementById("codificar2").value;
            let desplaza = document.getElementById("desplazamiento").value;
            let send = window.cipher.decode(ingresoDe,desplaza);
            textoDe.innerHTML = send;
        })
    
    
    }