import { ActionTypes } from "../contents/action-type";
import axios from "../../axios"
export const addUser = ({loggedUserProfileId,id})=> async(dispatch)=>{
    const response = await axios({
        method:'PUT',
        data:{
            userId:id
        },
        url:`/user/profile/addFriend/${loggedUserProfileId}`
    })

    dispatch({type:ActionTypes.ADD_USER,payload:response.data})
};