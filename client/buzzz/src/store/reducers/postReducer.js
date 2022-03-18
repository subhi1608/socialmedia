import { ActionTypes } from "../contents/action-type";

const initialState ={
    posts:[]
}
 const postReducer =(state=initialState,{type,payload})=>{
     switch (type) {
        
                case ActionTypes.GET_POST:
                    return {...state,posts:payload}
         default: return state;
     }
 }
 export default postReducer