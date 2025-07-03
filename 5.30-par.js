let numero = Number(prompt("Insira o número que desejar: "))

if(numero > 0 && numero % 2 == 0) {
    alert("O número escolhido é positivo e par. ")
}else if(numero > 0 && numero % 2 != 0) {
    alert("O número escolhido é positivo e ímpar. ")
}else if(numero == 0) {
    alert("O número escolhido é zero/nulo e é par. ")
} else if(numero < 0 && numero % 2 == 0) {
    alert("O número escolhido é negativo e é par. ")
} else if(numero < 0 && numero % 2 != 0) {
    alert("O número escolhido é negativo e é ímpar. ")
}