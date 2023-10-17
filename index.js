const PegarBotao = document.querySelector('#EnviarResposta')
PegarBotao.addEventListener('click', function(){
    const Peso = document.querySelector('#Peso').value
    const Altura = document.querySelector('#Altura').value
    const Sexo = document.querySelector('#Sexo').value
    const PesoNumber = Number.parseFloat(Peso)
    const AlturaNumber = Number.parseFloat(Altura)
    
    calculo = PesoNumber / (AlturaNumber**2)
    if(!calculo) {
        alert(`Digite um valor válido!`)

        return
    }
    Resultado(calculo)
})

function Resultado(calculo) {
    if(calculo >= 40.0) {
        alert(`${calculo.toFixed(1)}, Obesidade grau III`)
    } else if(calculo >= 35.0) {
        alert(`${calculo.toFixed(1)}, Obesidade grau II`)
    } else if(calculo >= 30.0) {
        alert(`${calculo.toFixed(1)}, Obesidade grau I`)
    } else if(calculo >= 25.0) {
        alert(`${calculo.toFixed(1)}, Sobrepeso`)
    } else if(calculo >= 18.7 && calculo <= 24.99) {
        alert(`${calculo.toFixed(1)}, Peso normal`)
    } else if (calculo < 18.6 && calculo >= 17) { 
        alert(`${calculo.toFixed(1)}, Abaixo do peso`)
    } else if(calculo < 17){
        alert(`${calculo.toFixed(1)}, Muito abaixo do peso`)

    }
}
