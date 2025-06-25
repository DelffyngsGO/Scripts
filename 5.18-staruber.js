let distancia = Number(prompt("Insira a distância(em kilômetros): "))
let tempo = distancia / 3000000
let minuto 
let hora
let dia
let mes
let ano

alert("O tempo de viagem (segundos) será: " + tempo , " s")

if (tempo >= 60) {
    minuto = tempo / 60
    alert("O tempo de viagem (minutos) será: " + minuto , " mins")

} if (minuto >= 60) {
    hora = minuto / 60
    alert("O tempo de viagem (horas) será: " + hora , " hrs")

} if (hora >= 24) {
    dia = hora / 24
    alert("O tempo de viagem (dias) será: " + dia , " dias")

} if (dia >= 30) {
    mes = dia / 30
    alert("O tempo de viagem (meses) será: " + mes , " mêses")

} if (mes >= 12) {
    ano = mes / 12
    alert("O tempo de viagem (anos) será: " + ano , " anos")
}




