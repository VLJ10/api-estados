

//Import do arquivo estados e cidades
const dados = require('./estados_cidades.js')

const MESSAGE_ERROR = { status: false, statusCode: 500, development: 'Vinicius Julio de Oliveira' }

//Retorna a lista de estados
const getAllEstados = function () {

    //Padrão do JSON que será o retorno da função
    let message = { status: true, statuscode: 200, development: 'Vinicius Julio de Oliveira', uf: [] }

    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
        message.quantidade
    })

    // Adiciona um novo elemento no JSON
    message.quantidade = message.uf.length

    //Apagar um existente no JSON
    //delete messege.status

    if (message.uf.length > 0) {
        return message //Resultado Verdadeiro da API 200
    } else {
        return MESSAGE_ERROR //Resultado Falso da API 500
    }

}


//Retorna dados do estados filtrando pela sigla dos estados
const getEstadoBySigla = function (sigla) {
    let siglaEstado = String(sigla).toUpperCase()

    let message2 = { status: true, statuscode: 200, development: 'Vinicius Julio de Oliveira' }
    let estado = dados.listaDeEstados.estados.find(item => item.sigla === siglaEstado)

    if (estado) {
        message2.uf = estado.sigla
        message2.descricao = estado.nome
        message2.capital = estado.capital
        message2.regiao = estado.regiao
        return message2

    } else {

        return MESSAGE_ERROR
    }


    
}


//Retorna a capital do estado filtrando pela sigla
const getCapitalbySigla = function (sigla) {

}


//Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function (regiao) {

}


//Retorna os estados que foram ou são capital do pais
const getEstadoCapitalByPais = function (pais) {

}


//Retorna as cidades existente em um estados, filtrando pela sigla
const getCidadesByEstados = function (sigla) {

}



module.exports = {
    getAllEstados,
    getEstadoBySigla
}