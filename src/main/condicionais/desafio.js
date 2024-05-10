const precoEtanol = 5.79
const precoGasolina = 6.66
const tipoCombustivel = 'Etanl'
let precoCombustivel
if (tipoCombustivel === 'Gasolina') {
    precoCombustivel = precoGasolina
} else {
    precoCombustivel = precoEtanol
}
const gastoMedioLitro = 12
const DistanciaEmKM = 80
const resultado = (precoCombustivel * DistanciaEmKM) / gastoMedioLitro

console.log(`O gasto aproximado da viagem é de : R$ ${resultado.toFixed(2)}`)