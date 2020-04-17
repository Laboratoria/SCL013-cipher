export function encode(string, offset) {
  let codigoAscii = "";
  let resultado = "";
  for (let posicion = 0; posicion < (string.length); posicion++) {
    var letraEnPosicion = string.charCodeAt(posicion);
    codigoAscii = ((letraEnPosicion - 65 + parseInt(offset)) % 26 + 65);

    resultado += String.fromCharCode(codigoAscii);
  }
  return resultado;
}

export function decode(string, offset) {
  let codigoAscii = "";
  let resultado = "";
  for (let posicion = 0; posicion < (string.length); posicion++) {
    codigoAscii = ((string.charCodeAt(posicion) + 65 - parseInt(offset)) % 26 + 65);
    resultado += String.fromCharCode(codigoAscii);
  }
  return resultado;
}
