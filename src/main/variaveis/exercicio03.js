const preco = 100
const pagamento = 6
// 1 - devito, 2 - dinheiro ou pix, 3 - até 2 parcelas e 4 - mais de 2 parcelas
let pagar
if (pagamento === 1) {
    pagar = `Pagando no débito você ganha 10% de desconto e pagará: R$ ${preco - (10 * preco / 100)}.`
} else if (pagamento === 2) {
    pagar = `Pagando no dinheiro ou pix você ganha 15% de desconto e pagará: R$ ${preco - (15 * preco / 100)}.`
} else if (pagamento === 3) {
    pagar = `Pagando em até duas parcelas você pagará: R$ ${preco}.`
} else if (pagamento === 4) {
    pagar = `Pagando parcelado você pagará: R$ ${preco + (10 * preco / 100)}.`
} else {
    pagar = 'Forma de pagamento inválida!'
}

console.log(pagar)