import { ActionTypes } from "../contents/action-type";

const initialState ={
    comments:[]
}
 const commentReducer =(state=initialState,{type,payload})=>{
     switch (type) {
        
                case ActionTypes.ADD_COMMENT:
                    return {...state,posts:payload}
         default: return state;
     }
 }
 export default commentReducer