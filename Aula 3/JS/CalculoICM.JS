function calculaimc() {
    event.preventDefault()
    var Altura = document.getElementById('Altura').value
    var Peso = document.getElementById('Peso').value
    //alert(`O peso é ${Peso} e a altura é ${Altura}`)
    var imc = Peso / (Altura * Altura)
    var Resultado = ""
    if (imc < 18.5) {
        Resultado = 'Abaixo do peso!'
    } else if (imc >= 18.5 && imc <= 24.9) {
        Resultado = 'Dentro do peso'
    } else if (imc >= 25 && imc <= 29.9) {
        Resultado = 'Sobrepeso'
    } else if (imc >= 30) {
        Resultado = 'Obesidade'
    }
    document.getElementById('Resultado').value = Resultado
}