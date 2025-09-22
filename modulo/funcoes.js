

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
    let siglaEstado = String(sigla).toUpperCase()

    let message3 = { status: true, statuscode: 200, development: 'Vinicius Julio de Oliveira' }
    let capital = dados.listaDeEstados.estados.find(item => item.sigla === siglaEstado)

    if (capital) {
        message3.uf = capital.sigla
        message3.descricao = capital.nome
        message3.capital = capital.capital
        return message3

    } else {
        return MESSAGE_ERROR
    }

}


//Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function (regiao) {
    let regiaoEstado = String(regiao).toUpperCase()
    let message4 = { status: true, statuscode: 200, development: 'Vinicius Julio de Oliveira' }

    let regiaoParams = dados.listaDeEstados.estados.filter(item => item.regiao.toUpperCase() === regiaoEstado)

    if (regiaoParams) {
        message4.regiao = regiaoEstado
        let estadosArray = []
        regiaoParams.forEach(function(item){
            let estado = {}
            estado.uf = item.sigla
            estado.descricao = item.nome
            estadosArray.push(estado)
        })
        message4.estados = estadosArray

        console.log(message4)
        return message4

    } else {
        return MESSAGE_ERROR
    }
}


//Retorna os estados que foram ou são capital do pais
const getEstadoCapitalByPais = function (pais) {
    let paises = String(pais).toUpperCase()
    let message5 = { status: true, statuscode: 200, development: 'Vinicius Julio de Oliveira' }
    let paisCapital 
    // let paisSelecionado = dados.listaDeEstados.find(item => item.pais.toUpperCase() === paises)
    // console.log(paisSelecionado)

    if (dados.listaDeEstados.pais.toUpperCase() === paises)
    {
        paisCapital = dados.listaDeEstados.estados.filter(item => item.capital_pais)


        
    }

    if (paisCapital != undefined) {
        let capitais = []

        paisCapital.forEach(function(item){
            let cidadesCapitais = {}
            cidadesCapitais.capital_atual = item.capital_pais.capital
            cidadesCapitais.uf = item.sigla
            cidadesCapitais.descricao = item.nome
            cidadesCapitais.capital = item.capital
            cidadesCapitais.regiao = item.regiao
            cidadesCapitais.capital_pais_ano_inicio = item.capital_pais.ano_inicio
            cidadesCapitais.capital_pais_ano_termino = item.capital_pais.ano_fim
            capitais.push(cidadesCapitais)
        })
        message5.capitais = capitais

        return message5
    } else {
        return MESSAGE_ERROR
    } 
    
}


//Retorna as cidades existente em um estados, filtrando pela sigla
const getCidadesByEstados = function (sigla) {
    let estado = String(sigla).toUpperCase()

    let messege6 = { status: true, statuscode: 200, development: 'Vinicius Julio de Oliveira' }
    let estadoCidade = dados.listaDeEstados.estados.find(item => item.sigla === estado)

    if (estadoCidade) {
        messege6.uf = estadoCidade.sigla
        messege6.descricao = estadoCidade.nome
        messege6.quantidade = estadoCidade.cidades.length
        let arrayCidade = []
        estadoCidade.cidades.forEach(function(item){
            arrayCidade.push(item.nome)
        })
        messege6.cidades = arrayCidade
        return messege6
    } else {
        return MESSAGE_ERROR
    }
}




module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalbySigla,
    getEstadosByRegiao,
    getEstadoCapitalByPais,
    getCidadesByEstados
}