import { encode, decode } from './cipher.js'

document.getElementById('Cifrar').addEventListener('click', cifrarMensaje)
document.getElementById('Descifrar').addEventListener('click', descifrarMensaje)

export function cifrarMensaje() {

    let desplazamiento = document.getElementById("desplazar").value;
    let mensaje = document.getElementById("mensaje_cifrar").value.toUpperCase();

    const resultado = encode(mensaje, desplazamiento);
    document.getElementById("mensaje_cifrado").value = resultado;
}

export function descifrarMensaje() {
    let desplazamiento = document.getElementById("desplazar").value;
    let mensaje = document.getElementById("mensaje_cifrar").value.toUpperCase();

    const resultado = decode(mensaje, desplazamiento);
    document.getElementById("mensaje_cifrado").value = resultado;
}



