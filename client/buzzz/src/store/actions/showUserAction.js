import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const showUser = (id)=> async(dispatch)=>{
    const response = await axios({
        method:'GET',
        url:`/user/profile/${id}`
    })
    dispatch({type:ActionTypes.SHOW_USER,payload:response.data})
};