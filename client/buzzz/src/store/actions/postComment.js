import { ActionTypes } from "../contents/action-type";
import axios from "../../axios"
export const addComment = ({description,loggedUserId,_id})=> async(dispatch)=>{
   
    const response = await axios({
        method:'PUT',
        data:{
            desc:description,
            userId:loggedUserId
        },
        url:`/post/comment/${_id}`
    })
    console.log('responseeeeee',response);
    dispatch({type:ActionTypes.ADD_COMMENT,payload:response.data})
};