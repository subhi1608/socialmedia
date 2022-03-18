import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const suggestedUser = (id)=> async(dispatch)=>{
    
    const response = await axios({
        method:'GET',
        url:`/auth/suggestions/${id}`
    })
    
    dispatch({type:ActionTypes.SUGGESTED_USER,payload:response.data})
};