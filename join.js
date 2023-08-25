const nome = "cubos academy"

function inverter(nome) {
    let nomeInvertido = nome.split("").reverse()
    let nomeFormatado = nomeInvertido.join("")
    return nomeFormatado
}

inverter(nome)
console.log(inverter(nome))