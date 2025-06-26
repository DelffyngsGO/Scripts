let nota1 = Number(prompt("Insira sua primeira nota: "))
let nota2 = Number(prompt("Insira sua segunda nota: "))
let media = (nota1 + nota2) / 2

if (media >= 9 && media <= 10) {
    alert("Na primeira nota, você tirou: " + nota1 + "\n Na segunda nota: " + nota2 + "\n Sua média final ficou: " + media + "\n Classificado em: (A)")
} else if (media >= 7.5 && media < 9) {
    alert("Na primeira nota, você tirou: " + nota1 + "\n Na segunda nota: " + nota2 + "\n Sua média final ficou: " + media + "\n Classificado em: (B)")
} else if (media >= 6 && media < 7.5) {
    alert("Na primeira nota, você tirou: " + nota1 + "\n Na segunda nota: " + nota2 + "\n Sua média final ficou: " + media + "\n Classificado em: (C)")
} else if (media >= 4 && media < 6) {
    alert("Na primeira nota, você tirou: " + nota1 + "\n Na segunda nota: " + nota2 + "\n Sua média final ficou: " + media + "\n Classificado em: (D)")
} else if (media >= 0 && media < 4) {
    alert("Na primeira nota, você tirou: " + nota1 + "\n Na segunda nota: " + nota2 + "\n Sua média final ficou: " + media + "\n Classificado em: (E)")
}