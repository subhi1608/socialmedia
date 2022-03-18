import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const getUsers = (loggedUserId)=> async(dispatch)=>{
   
        const response = await axios({
            method:'GET',
            url:`/user/friends/${loggedUserId}`
        }) 
       
        dispatch({type:ActionTypes.GET_FRIENDS,payload:response.data})

};
