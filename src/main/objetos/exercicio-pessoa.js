class Pessoa {
    nome;
    peso;
    altura

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return `IMC de ${this.nome}: ${imc.toFixed(1)} - Abaixo do peso.`
        } else if (imc > 18.5 && imc < 25) {
            return `IMC de ${this.nome}: ${imc.toFixed(1)} - Peso normal.`
        } else if (imc > 25 && imc < 30) {
            return `IMC de ${this.nome}: ${imc.toFixed(1)} - Acima do peso.`
        } else if (imc > 30 && imc < 40) {
            return `IMC de ${this.nome}: ${imc.toFixed(1)} - Obeso.`
        } else {
            return `IMC de ${this.nome}: ${imc.toFixed(1)} - Obesidade Morbida.`
        }
    }
}

const jimCarrey = new Pessoa('Jim Carrey', 78, 1.86);

console.log(jimCarrey.classificarIMC());