//Se crea la función para comenzar con las instrucciones
function doCrypt(isDesencriptar) {
	//se declara la variable de la clave
	var shiftText = document.getElementById("shift").value;
	//se condiciona con if para que sólo ingresen números, si ingresan 
	//símbolos no pasa la prueba y devuelve una alerta.
	if (!/^-?\d+$/.test(shiftText)) {
		alert("Clave Inválida:Ingrese sólo números enteros positivos.");
		return;
	}
	//Se declara la variable de la clave y se condiciona con la fórmula del
	//alfabeto normal sin ñ, para que pueda dar muchas vueltas a este
	var shift = parseInt(shiftText);
	if (isDesencriptar){
		shift = (2080 - shift) % 26;
	}
	//Se declara la variable del texto y se llama
	var textElem = document.getElementById("text");
	//Se integra los elementos al cifrado
	textElem.value = caesarShift(textElem.value, shift);
}
//Se crea la función integrando el texto y la clave
function caesarShift(text, shift) {
	//Se crea la variable de salida o resultado
	var result = "";
	//declaramos para ir por cada letra o caracter
	for (var i = 0; i < text.length; i++) {
		//declarando esta variable obtenemos el caracter que agregaremos
		var c = text.charCodeAt(i);
		//Condicionamos y agregamos la fórmula para letras mayúsculas 
		//según alfabeto normal y código ASCII
		if (65 <= c && c <=  90){
		   result += String.fromCharCode((c - 65 + shift) % 26 + 65);
		} 
		//Condicionamos y agregamos la fórmula para letras minúsculas 
		//según alfabeto normal y código ASCII
		else if (97 <= c && c <= 122){
			result += String.fromCharCode((c - 97 + shift) % 26 + 97);
		}
		//Adjuntamos para que el resultado salga con el caracter en 
		//la posición indicada (i)
		else{result += text.charAt(i);
		}
	}
	//Obtenemos el resultado 
	return result;
}
