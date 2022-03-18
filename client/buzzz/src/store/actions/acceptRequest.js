import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const acceptRequest = (props)=> async(dispatch)=>{
        const response = await axios({
            method:'PUT',
            data:{
                userId:props._id
            },
            url:`user/profile/acceptFriend/${props.loggedUserId}`
        }) 
       
        dispatch({type:ActionTypes.ACCEPT_USER,payload:response.data})

};
