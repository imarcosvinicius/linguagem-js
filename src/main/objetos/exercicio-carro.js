class Carro {
    marca;
    modelo;
    cor;
    autonomia

    constructor(marca, modelo, cor, autonomia) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.autonomia = autonomia;
    }

    gastoMedioLitro(precoCombustivel, DistanciaEmKM) {
        return (precoCombustivel * DistanciaEmKM) / this.autonomia;
    }
}

const meuCarro = new Carro('Fiat', 'Uno', 'Preto', 12);

console.log(meuCarro.gastoMedioLitro(5.23, 160).toFixed(2))