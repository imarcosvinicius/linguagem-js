const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
  const valor = entradas[i];
  i++;
  return valor;
}

function printMaior(array) {
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]> maior) {
            maior = array[i];
        }
    }
    return maior;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print, printMaior };
