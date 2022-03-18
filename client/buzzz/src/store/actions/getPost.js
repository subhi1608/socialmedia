import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export const getPost= (loggedUserId)=> async(dispatch)=>{

        const response = await axios({
            method:'GET',
            url:`/post/${loggedUserId}`
        }) 
      
        dispatch({type:ActionTypes.GET_POST,payload:response.data})

};