const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const PostSchema = Schema({
userId:{
    type: String,
    ref: 'User' 
},
likes:{
    type:Array,
    default:[]
},
dislike:{
    type:Array,
    default:[] 
},
 desc:{
     type:String,
     default:"",
     max:500
 },
img:{
    type:Array
},
isFlagged:{
    type:Boolean,
    default:false
},
isVerified:{
    type:Boolean,
    default:false,
},
comments:{
    type:Array,
    ref:'User',
}
},
{
    timestamps:true
})
module.exports = mongoose.model("Post",PostSchema)