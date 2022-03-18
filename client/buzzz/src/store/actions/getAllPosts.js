import {ActionTypes} from "../contents/action-type.js"
import axios from "../../axios"
export function getAllPosts(loggedUserId){return async(dispatch)=>{

        const response = await axios({
            method:'GET',
            url:`/post/allPosts/${loggedUserId}`
        }) 
      
        dispatch({type:ActionTypes.GET_ALL_POSTS,payload:response.data})
    }
};
export function filteredPosts (){ return async(dispatch)=>{

    const response = await axios({
        method:'GET',
        url:`/post/flaggedPosts`
    })

    dispatch({type:ActionTypes.GET_FLAGGED_POSTS,payload:response.data})
};
}
