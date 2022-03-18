import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const getUser = ()=> async(dispatch)=>{
    const response = await axios({
        method:'GET',
        url:'/user'
    })
    dispatch({type:ActionTypes.GET_USER,payload:response.data})
};