import { ActionTypes } from "../contents/action-type";
import axios from "../../axios"
export function likePost ({loggedUserId,_id}){return async(dispatch)=>{

    const response = await axios({
        method:'PUT',
        data:{
            postId:_id
        },
        url:`/post/like/${loggedUserId}`
    })

    dispatch({type:ActionTypes.LIKE_POST,payload:response.data})
};
}
export function dislikePost ({loggedUserId,_id}){ return async(dispatch)=>{
  
    const response = await axios({
        method:'PUT',
        data:{
            postId:_id
        },
        url:`/post/dislike/${loggedUserId}`
    })

    dispatch({type:ActionTypes.DISLIKE_POST,payload:response.data})
};
}
export function flagPost (_id){ return async(dispatch)=>{

    const response = await axios({
        method:'PUT',
        data:{
            postId:_id
        },
        url:`/post/flagPost`
    })

    dispatch({type:ActionTypes.FLAG_POST,payload:response.data})
};
}
