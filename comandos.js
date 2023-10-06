let num = document.querySelector('input#caixa_numero')
let lista = document.querySelector('select#caixa_lista')
let resposta = document.querySelector('div#caixa_resposta')
let valores = []

function isNUmero(n) {
    if(Number(n) >= 1 && Number(n) <= 200) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNUmero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
        resposta.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert("Caro usuário, adicione valores antes de finalizsar!")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let proximo in valores) {
            soma += valores[proximo]
            if(valores[proximo] > maior) 
                maior = valores[proximo]
            if (valores[proximo] < menor)
            menor = valores[proximo]
        }
        media = soma / total
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>Temos um total de ${total} elementos;</p>`
        resposta.innerHTML += `<p>O maior valores informado foi de ${maior};</p>`
        resposta.innerHTML += `<p>O menor valor informado foi de ${menor};</p>`
        resposta.innerHTML += `<p>A soma de todos os elementos é ${soma};</p>`
        resposta.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
