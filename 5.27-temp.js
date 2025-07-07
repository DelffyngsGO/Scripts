let temperatura = Number(prompt("Qual temperatura deseja converter? \n(1) Fahrenheit para Celsius; \n(2) Celsius para Fahrenheit; "))
let celsius
let fahrenheit
let celsius1 
let farenheit1

if (temperatura == 1) {
    celsius = Number(prompt("Insira a quantia(em Fahrenheit) que queres converter para Celsius: "))
    celsius1 = (celsius -32) / 1,8
    alert("A temperatura de Farenheit para Celsius é: " + celsius1)
} else if (temperatura == 2) {
    fahrenheit = Number(prompt("Insira a quantia(em Celsius) que queres converter para Fahrenheit: "))
    farenheit1 = (fahrenheit * 1.8) + 32
    alert("A temperatura de Celsius para Fahrenheit é: " + farenheit1)
}