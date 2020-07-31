window.cipher=  {
    //ingreso de texto a codigo y desplazamiento hacia adelante
        encode: (ingresoEn,desplaza) => {
    
            let listo = ""; //variable
            for(let i=0;i<ingresoEn.length;i++){ //funcion que recorre cada letra del texto
                let posText = ingresoEn.charCodeAt(i); //se crea variable para guarda la posc. de la letra en ascii - charCodeAt nos da la posc.de una letra en ascii
                let posAscii = posText - 65 + desplaza % 26 + 65; //aqui se aplica la formula, se obtiene la posc.ascii mas desplazamiento - estudiar como funciona
                listo = listo + String.fromCharCode(posAscii); // en esta funcion se da la letra segun la posc. en ascii - string.fromCharCode nos da la letra
            }
            return listo; //devuelve el texto codificado al boton addEventListener en index.js
        },
      //ingreso de codigo a texto y desplazamiento hacia atras
        decode: (ingresoDe,desplaza) => {
    
            let listo2 = ""; //variable2
            for(let i=0;i<ingresoDe.length;i++){ //función que recorre cada letra del codigo
                let posText2 = ingresoDe.charCodeAt(i);//se crea variable para guarda la posc. de la letra en ascii - charCodeAt nos da la posc.de una letra en ascii
                let posAscii2 = posText2 - 65 - desplaza % 26 + 65;//aqui se aplica la formula, se obtiene la pos.ascii menos el desplazamiento desplazamiento - estudiar como funciona
                listo2 = listo2 + String.fromCharCode(posAscii2); // en esta funcion se da la letra segun la posc. en ascii - string.fromCharCode nos da la letra
                //}
            }
            return listo2;
        }
    
    }