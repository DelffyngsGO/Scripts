let altura = Number (prompt ("Insira sua altura: "))
let sexo =  Number (prompt ("Qual seu sexo? \n (1) para masculino; \n (2) para feminino: "))

if (sexo == 1) {
    resultado1 = altura * 72.7 -58
    alert("Seu peso ideal é: " + resultado1)
} else if (sexo == 2) {
    resultado2 = altura * 62.1 -44.7
    alert("Seu peso ideal é: " + resultado2)
} else {
    alert("Insira apenas (1) ou (2)")
}
