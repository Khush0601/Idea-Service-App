const ideaController=require('../controllers/idea.controller')

module.exports=(app)=>{
    app.get('/ideaApp/api/v1/ideas',ideaController.getIdeas)
    app.get('/ideaApp/api/v1/ideas/:id',ideaController.getIdeaBasedOnId)
    app.post('/ideaApp/api/v1/ideas',ideaController.createIdea)
    app.put('/ideaApp/api/v1/ideas/:id',ideaController.updateIdea)
    app.delete('/ideaApp/api/v1/ideas/:id',ideaController.deleteIdea)
}