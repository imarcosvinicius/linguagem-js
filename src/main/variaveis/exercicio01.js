const nota1 = 7
const nota2 = 4
const nota3 = 8
const media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log(`Nota: ${media.toFixed(1)}. REPROVADO!`)
} else if (media >=5 && media < 7) {
    console.log(`Nota: ${media.toFixed(1)}. RECUPERAÇÃO!`)
} else {
    console.log(`Nota: ${media.toFixed(1)}. APROVADO!`)
}