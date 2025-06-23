let dias = Number(prompt("Quantos dias pretendes ficar?"))
let valor
let bruto 
let desconto10
let desconto15
let total

if (dias <= 5) {
    valor = 100
} if (dias >= 6 && dias <= 10) {
    valor = 90
} if (dias >= 11) {
    valor = 80
}
bruto = dias * valor 

desconto10 = bruto * 0.1

desconto15 = bruto * 0.15

total = bruto - desconto10 - desconto15 + 150

alert("Total à pagar: R$ " + total + 
      "\nDesconto 1: R$" + desconto10 +
      "\nDesconto 2: R$" + desconto15 +
      "\nTotal sem desconto: R$" + bruto +
      "\nMulta: R$150")



    
