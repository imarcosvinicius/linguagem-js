// 1 - debito, 2 - dinheiro ou pix, 3 - até 2 parcelas e 4 - mais de 2 parcelas
function aplicarDesconto(preco, desconto) {
    return  preco - (desconto * preco / 100)
}
function aplicarJuros(preco, desconto) {
    return preco + (desconto * preco / 100)
}
function imprimirTotal(preco, pagamento) {
    if (pagamento === 1) {
        return `Pagando no débito você ganha 10% de desconto e pagará: R$ ${aplicarDesconto(preco, 10)}.`
    } else if (pagamento === 2) {
        return `Pagando no dinheiro ou pix você ganha 15% de desconto e pagará: R$ ${aplicarDesconto(preco, 15)}.`
    } else if (pagamento === 3) {
        return `Pagando em até duas parcelas você pagará: R$ ${preco}.`
    } else if (pagamento === 4) {
        return `Pagando parcelado você pagará: R$ ${aplicarJuros(preco, 10)}.`
    } else {
        return 'Forma de pagamento inválida!'
    }
}

(function () {
    console.log(imprimirTotal(100, 2))
}) ()