let idade = Number(prompt("insira sua idade: "))

if (idade < 16) {
    alert("Você não pode votar ainda.")
} else if (idade >= 16 && idade <= 17) {
    alert("Você pode votar, se quiser.")
} else if (idade >= 18 && idade <= 65) {
    alert("Seu voto é obrigatório. ")
} else if (idade >= 65) {
    alert("Você pode votar, se quiser.")
} else {
    alert("Insira um número válido.")
}