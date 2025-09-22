/***************************************************************************
 * Objetivo: API responsavel em criar endPoints referentes estados e cidades
 * Data: 15/09/2025
 * Autor: Vinicius Julio
 * Versão: 1.0
 * 
 * Observações: instalar dependencias para criar a API
 *      express     -> npm install express     --save Instala as dependencias para criar uma API
 *      cors        -> npm install cors        --save Instala as dependencias para configurar as permissões de uma API
 *      body-parser -> npm install body-parser --save Instala as dependencias para receber os tipos de dados via POST ou PUT
*****************************************************************************/

//Import das dependencias 
const express = require('express')
const cors    = require('cors')
const bodyParser = require('body-parser')

//Importe do arquivo de funções
const dados = require('./modulo/funcoes.js')

//Define a porta padrão da API, se for em um servidor de nuvem não temos acesso a porta
            // em execução local podemos definir uma porta livre
const PORT = process.PORT || 8080

//Instancia na classe do express
const app = express()

//Configurações do CORS
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*') // IP de origem
    response.header('Access-Control-Allow-Methods', 'GET') // Metodos (Verbos) do protocolo HTTP

    app.use(cors())
    next() //: Proximo
})


//Request -> recebe os dados da requisição 
//Response -> envia os dados da API

//EndPoints

// Retorna todos os estados
app.get('/v1/estados', function(request, response){

    let estados = dados.getAllEstados()

    response.status(estados.statuscode)
    response.json(estados)
})

// Retorna um estado em especifico
app.get('/v1/estado/:uf', (request, response) => {

    let sigla = request.params.uf
    let uf = dados.getEstadoBySigla(sigla)



    response.status(uf.statuscode)
    response.json(uf)

   
})
// retorna uma capital pela sigla do estado
app.get('/v1/capital/estado/:uf', (request, response) => {
    
    let sigla = request.params.uf
    let capital = dados.getCapitalbySigla(sigla)
 
    response.status(capital.statuscode)
    response.json(capital)

})
//retorna os estados pela região
app.get('/v1/regiao/estado', (request, response) => {
    
    let regiao = request.query.regiao
    let regiaoEstados = dados.getEstadosByRegiao(regiao)

    response.status(regiaoEstados.statuscode)
    response.json(regiaoEstados)
    
})

app.get('/v1/pais/capital/:pais',  (request, response) => {

    let paisCapital = request.params.pais
    let capital = dados.getEstadoCapitalByPais(paisCapital)

    response.status(capital.statuscode)
    response.json(capital)
})

app.get('/v1/cidade/estado/:uf',  (request, response) => {

    let cidadeEstado = request.params.uf
    let cidade = dados.getCidadesByEstados(cidadeEstado)

    response.status(cidade.statuscode)
    response.json(cidade)
})


//Start da API
app.listen(PORT, () => {
    console.log('API aguardando requisições .....')
})

