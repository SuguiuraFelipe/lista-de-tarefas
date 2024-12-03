module.exports = {
    // GET /app
    index: (req, res) =>{
        const taskLists = taskListModel.getAllTaskLists()
        res.render('app', {taskLists})
    }

    // GET /app/nova-lista

    // POST /app/nova-list

    // GET /app/:id

    // POST /app/:id/excluir

    // POST /app/:id/nova-tarefa

    // POST /app/:lsitId/completar/:taskId
}