const ObjectId = require('mongoose').Types.ObjectId;
const userData = require('./User');

module.exports.createUser = async({username,email})=>{
    const newUser = new userData({username,email});
    try{
        const savedUser = await newUser.save()
         return savedUser
     }
     catch(err){
         console.log(err);
         return err;
     }
}

module.exports.getUser = async(id)=>{
        const user = await userData.findById(id)
        const {__v,createdAt,updatedAt,followers,following, ...other} = user._doc
        return other;
}
module.exports.getAllUser = async()=>{
    const userList = await userData.find({})
    return userList;
}

module.exports.getFriends = async(userId)=>{
    const user = await userData.findOne({_id:userId}).populate('friends')
   
    const userList = user.friends.map(item=>{
        return {
            name:item.username,
            id:item._id,
            pic:item.profilePic
        }
    })

    return userList;
}

// suggested users
module.exports.suggestedUserFriends = async(userId)=>{

    const allUsers = await userData.find({_id:{$ne:ObjectId(userId)},friends:{$ne:userId}})

    return allUsers;
}
module.exports.showRequests = async(loggedUserId)=>{
    const user = await userData.findOne({_id:loggedUserId}).populate('notifications')
    const userFriends = user.notifications.map(item=>{
        return{
            name:item.username,
            id:item._id,
            pic:item.profilePic
        }
    })
    return userFriends;
}
// add friends
module.exports.addUser = async({loggedId,addUserId})=>{
   
    const loggedUser = await userData.findById(loggedId);
    const userToAdd = await userData.findById(addUserId);
    
    try{
        if(!loggedUser.sentRequests.includes(addUserId) && !loggedUser.friends.includes(addUserId))
        {
        await loggedUser.updateOne({$push:{sentRequests:addUserId}})
        await userToAdd.updateOne({$push:{notifications:loggedId}})
        return userToAdd;
    }
        else
    {
        const message ="Allready sent request"
        return message
    }
    }catch(err){
        const message ="Not found"
        return message
    }
}
// accept requests
module.exports.acceptUserRequest = async({loggedId,acceptUserId})=>{
   
    const loggedUser = await userData.findById(loggedId);
    const userToAccept = await userData.findById(acceptUserId);
    
    try{
        if(loggedUser.notifications.includes(acceptUserId) && !loggedUser.friends.includes(acceptUserId))
        {
        await loggedUser.updateOne({$push:{friends:acceptUserId}})
        await loggedUser.updateOne({$pull:{notifications:acceptUserId}})
        await userToAccept.updateOne({$push:{friends:loggedId}})
        await userToAccept.updateOne({$pull:{sentRequests:loggedId}})
        return userToAccept;
    }
        else
    {
        const message ="Allready accepted"
        return message
    }
    }catch(err){
        const message ="Not found"
        return message
    }
}
