const ideas=require('../models/idea.model')
// this will contain all the logic for getting all ideas

var count=2 // current no. of ideas
exports.getIdeas=(req,res)=>{
    res.status(200).send(ideas)
}

// implementing GET using Id

exports.getIdeaBasedOnId=(req,res)=>{
const ideaIdForGetting=req.params.id
const fetchingIdea=ideas[ideaIdForGetting]
res.status(200).send(fetchingIdea)
}

//Implementing post : method to create a new idea
exports.createIdea=(req,res)=>{
    req.body.id=++count
   
    ideas[count]=req.body
    res.status(201).send(ideas[count])
}
// method to update existing idea based on id
exports.updateIdea=(req,res)=>{
    const ideaIdForUpdating=req.params.id
    const fetchingIdeaId=ideas[ideaIdForUpdating]
    if(fetchingIdeaId){
        ideas[ideaIdForUpdating]=req.body
        res.status(200).send(ideas[ideaIdForUpdating])
    }
    else{
        res.status(400).send({
            message:'idea id passed is not valid'
        })
    }
}

// method to delete idea based on id
exports.deleteIdea=(req,res)=>{
    const deletedIdeaId=req.params.id
    if(ideas[deletedIdeaId]){
        delete ideas[deletedIdeaId]
        res.status(200).send({
            message:'successfully deleted'
        })
    }
    else{
        res.status(400).send({
            message:'idea id is not found'
        })
    }
}