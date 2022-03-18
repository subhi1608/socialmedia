const users = require('../models/userService');

module.exports.getUser =async(req,res)=>{
    try{
        res.status(200).json(req.user)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
module.exports.getAllUser = async(req,res)=>{
    try{
        const usersList = await users.getAllUser()
        res.status(200).json(usersList)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
// api for adding dummy users
module.exports.createUser = async(req,res)=>{
    const {username,email} = req.body
    try{
        const addedUser = await users.createUser({username,email})
        res.status(201).json(addedUser)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
module.exports.singleUser =async(req,res)=>{
    try{
        const user = await users.getUser(req.params.id)
        console.log(user);
        res.status(200).json(user)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}


module.exports.getFriends = async(req,res)=>{
    const userId = req.params.id
    try{ 
        const userFriends = await users.getFriends(userId);
        res.status(200).json(userFriends);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
module.exports.suggestedFriends = async(req,res)=>{
    const userId = req.params.id
    console.log("userId",userId);
    try{
        const friendSuggestion = await users.suggestedUserFriends(userId)
        res.status(200).json(friendSuggestion);  
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }

}
module.exports.showRequests = async(req,res)=>{
    const loggedUserId = req.params.id;
    try{
        const showUserRequests = await users.showRequests(loggedUserId);
        res.status(200).json(showUserRequests)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
module.exports.addUser = async(req,res)=>{
    // console.log(req.body.userId,req.params.id);
    try{
        const user = await users.addUser({addUserId:req.body.userId,loggedId:req.params.id})
        res.status(200).json(user)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
module.exports.acceptUserRequest = async(req,res)=>{
    console.log(req.body.userId,req.params.id);
    try{
        const user = await users.acceptUserRequest({acceptUserId:req.body.userId,loggedId:req.params.id})
        res.status(200).json(user)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}