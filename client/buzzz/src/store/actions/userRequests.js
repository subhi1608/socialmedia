import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const showRequests = (loggedUserId)=> async(dispatch)=>{
  
    const response = await axios({
        method:'GET',
        url:`user/showRequests/${loggedUserId}`
    }) 
  
    dispatch({type:ActionTypes.SHOW_REQUESTS,payload:response.data})

};