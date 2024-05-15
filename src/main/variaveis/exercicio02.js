const peso = 80
const altura = 1.85
const imc = peso / Math.pow(altura, 2)

if (imc < 18.5) {
    console.log(`IMC: ${imc.toFixed(1)} - Abaixo do peso.`)
} else if (imc > 18.5 && imc < 25) {- 
    console.log(`IMC: ${imc.toFixed(1)} - Peso normal.`)
} else if (imc > 25 && imc < 30) {- 
    console.log(`IMC: ${imc.toFixed(1)} - Acima do peso.`)
} else if (imc > 30 && imc < 40) {- 
    console.log(`IMC: ${imc.toFixed(1)} - Obeso.`)
} else {
    console.log(`IMC: ${imc.toFixed(1)} - Obesidade Morbida.`)
}