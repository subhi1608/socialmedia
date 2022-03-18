import { ActionTypes } from "../contents/action-type";

const initialState ={
    user:{}
}
 const userReducer =(state=initialState,{type,payload})=>{
     switch (type) {
        
                case ActionTypes.GET_USER:
                    
                    return {...state,user:payload}
                    case ActionTypes.ADD_USER:
                        return {...state,user:payload}
                    
         default: return state;
     }
 }
 export default userReducer