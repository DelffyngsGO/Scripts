let pontuação = Number(prompt("Insira sua pontuação: "))
if (pontuação <= 10) {
    alert("Deu ruim ")
} else if (pontuação > 10 && pontuação <= 100) {
    alert("Tá... melhorando hein ")
} else if (pontuação > 100 && pontuação <= 200) {
    alert("SUPIMPA! ")
} else if (pontuação > 200) {
    alert("MITOU!!")
}
