import {
  encode,
  decode
} from './cipher.js'

document.getElementById('Cifrar').addEventListener('click', cifrarMensaje)
document.getElementById('Descifrar').addEventListener('click', descifrarMensaje)

export function cifrarMensaje() {

  let offset = document.getElementById("desplazar").value;
  let string = document.getElementById("mensaje_cifrar").value.toUpperCase();

  const resultado = encode(string, offset);
  document.getElementById("mensaje_cifrado").value = resultado;
}

export function descifrarMensaje() {
  let offset = document.getElementById("desplazar").value;
  let string = document.getElementById("mensaje_cifrar").value.toUpperCase();

  const resultado = decode(string, offset);
  document.getElementById("mensaje_cifrado").value = resultado;
}

document.getElementById("inicio").addEventListener("click", mostrar);

function mostrar() {
  document.getElementById("principal").style.display = "none";
  document.getElementById("secundario").style.display = "block";
}
