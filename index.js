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
        alert(`${calculo.toFixed(1)}, Obesidade grau III, vai emagracer, filho da puta!`)
    } else if(calculo >= 35.0) {
        alert(`${calculo.toFixed(1)}, Obesidade grau II, dá uma maneirada no Mc Donalds, viado(a)!`)
    } else if(calculo >= 30.0) {
        alert(`${calculo.toFixed(1)}, Obesidade grau I, tá precisando se exercitar...`)
    } else if(calculo >= 25.0) {
        alert(`${calculo.toFixed(1)}, Sobrepeso, faça uma caminhada ou morra com artérias entupidas!`)
    } else if(calculo <= 18.5){
        alert(`${calculo.toFixed(1)}, CARALHO IRMÃO, TU É UM ESPECTRO? ✞`)
    } else if(calculo >= 18,6) {
        alert(`${calculo.toFixed(1)}, Está no caminho certo, meus parabéns (ou não)`)
    }
}