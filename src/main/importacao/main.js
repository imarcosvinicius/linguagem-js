const { gets, print, printMaior } = require("./funAuxiliar");

const numerosSorteados = [];
let cond = true;
while (cond === true) {
  const numeroSorteado = gets();
  if (numeroSorteado === undefined) {
    cond = false;
  } else {
    numerosSorteados.push(numeroSorteado);
  }
}
let maior = printMaior(numerosSorteados);
print(maior);