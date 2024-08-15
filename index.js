document.getElementById('formPage').addEventListener('submit', (event) => {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('Peso').value);
    const altura = parseFloat(document.getElementById('Altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        alert(`Digite um valor válido!`)
        return
    }

    const imc = calculoImc(peso, altura);
    exibirResultado(imc);
});

const calculoImc = (peso, altura) => peso / (altura ** 2); 

function exibirResultado(imc) {

    const outputs = ["Obesidade grau III", "Obesidade grau II", "Obesidade grau I", "Sobrepeso",
        "Peso normal", "Abaixo do peso", "Muito abaixo do peso"]

    if (imc >= 40.0) {
        alert(`${imc.toFixed(1), outputs[0]}`);
    } else if (imc >= 35.0) {
        alert(`${imc.toFixed(1), outputs[1]}`);
    } else if (imc >= 30.0) {
        alert(`${imc.toFixed(1), outputs[2]}`);
    } else if (imc >= 25.0) {
        alert(`${imc.toFixed(1), outputs[3]}`);
    } else if (imc >= 18.7 && imc <= 24.99) {
        alert(`${imc.toFixed(1), outputs[4]}`);
    } else if (imc >= 17 && imc < 18.7) {
        alert(`${imc.toFixed(1), outputs[5]}`);
    } else if (imc < 17) {
        alert(`${imc.toFixed(1), outputs[6]}`);
    }
}
