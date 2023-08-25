const nome = "alzira"

function inverter(nome) {
    let nomeInvertido = nome.split("").reverse()
    let nomeFormatado = ""
    for (item of nomeInvertido) {
        nomeFormatado += item
    }

    return nomeFormatado
}

inverter(nome)
console.log(inverter(nome))