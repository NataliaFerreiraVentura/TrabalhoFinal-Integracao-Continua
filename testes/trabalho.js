// Converte o nome do pet para letras maiúsculas para gerar a tag de identificação
const geradorDeTagsDeIdentificacao = (nome) => {
    return nome.toUpperCase()
}

// Verifica se o pet pode ser adotado com base na idade e porte
// Regras:
// - Se idade for maior ou igual a 2 anos, pode ser adotado
// - Se idade for 1 ano e porte for "M" (médio), também pode ser adotado
function verificarSePodeSerAdotado(idade, porte) {
    return idade >= 2 || (idade === 1 && porte === 'M')
}

// Calcula o consumo diário de ração com base no peso do pet
// Fórmula: peso (kg) * 300 gramas
function calcularConsumoDeRacao(nome, idade, pesoDog) {
    return pesoDog * 300
}

// Decide o tipo de atividade ideal para o pet com base no porte
function decidirTipoDeAtividadePorPorte(porte) {
    switch (porte) {
        case 'pequeno':
            return 'brincar dentro de casa'
        case 'medio':
            return 'caminhada no quarteirão'
        case 'grande':
            return 'correr no parque'
        default:
            return 'porte inválido'
    }
}

// Simula uma busca assíncrona e retorna um dado (neste caso, o nome 'Pipoca') após 1 segundo
async function buscarDadoAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Pipoca')
        }, 1000)
    })
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}