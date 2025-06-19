let maça = Number(prompt("Quantas maçãs deseja comprar? "))
if (maça <= 12) {
    let menos = maça * 0.30
    alert("Pagará R$" + menos)
} else if (maça >= 12) {
    let mais = maça * 0.25
    alert("Pagará R$" + mais) 
} else {
    alert("Insira um número válido ")
}