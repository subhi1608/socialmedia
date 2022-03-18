import { ActionTypes } from "../contents/action-type";
const initialState ={
    suggestedUsers:[]
}
 const userReducer =(state=initialState,{type,payload})=>{
     switch (type) {
         case ActionTypes.SUGGESTED_USER:
            
             return {...state,suggestedUsers:payload};

                
         default: return state;
     }
 }
 export default userReducer