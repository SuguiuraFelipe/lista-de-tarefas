const express = require('express')
const path = require('node:path')
const router = require('./router')

const app = express()

// Configuração EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração arquivos estáticos
app.use(express.static('public'))

// configuração para ler os dados da requisição
app.use(express.urlencoded({extended: true}))

// Rotas da aplicação
app.use(router)

const PORT = process.env.PORT || 3000 // Variável de ambiente
app.listen(PORT, () => console.log(`Servidor iniciado \nRodando em http://localhost:${PORT}/`))