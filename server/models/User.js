const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    googleId:{
        type:String,
    },
    profilePic:{
        type:String,
        default:""
    },
    coverPic:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    notifications: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    sentRequests:{
        type:Array,
        default:[]
    },
    friends:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    posts:{
        type:Array,
        default:[]
    }
},
{
   timestamps:true
})
module.exports = mongoose.model("User",UserSchema)