import { ActionTypes } from "../contents/action-type";

const initialState ={
    users:[]
}
 const userReducer =(state=initialState,{type,payload})=>{
     switch (type) {
         case ActionTypes.GET_FRIENDS:
            
             return {...state,users:payload};
            
                    
         default: return state;
     }
 }
 export default userReducer