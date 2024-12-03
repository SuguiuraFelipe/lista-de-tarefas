const express = require('express')
const tarefaController = require('./controllers/taskListController')
const TarefasList = require('./controllers/tarefasList')

const router = express.Router()

router.get('/', (req, res) => res.render('index'))

module.exports = router