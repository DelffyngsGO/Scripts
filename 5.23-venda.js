let preço = Number(prompt("Insira o preço do produto(R$): "))
let porcentagem1
let porcentagem2

if(preço <= 20) {
    porcentagem1 = preço * 0.45
    alert("O lucro da sua revenda será: " + porcentagem1)
} else if (preço >= 21) {
    porcentagem2 = preço * 0.30
    alert("O lucro da sua revenda será: " + porcentagem2)
}
