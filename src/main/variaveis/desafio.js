const precoCombustivel = 6.70
const gastoMedioLitro = 12
const DistanciaEmKM = 80
const resultado = (precoCombustivel * DistanciaEmKM) / gastoMedioLitro

console.log(`O gasto aproximado da viagem é de : R$ ${resultado.toFixed(2)}`)