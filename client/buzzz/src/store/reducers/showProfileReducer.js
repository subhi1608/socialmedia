import { ActionTypes } from "../contents/action-type";

const initialState ={
    userProfile:{}
}
 const showProfileReducer =(state=initialState,{type,payload})=>{
     switch (type) {
                case ActionTypes.SHOW_USER:
                    return {...state,userProfile:payload}
         default: return state;
     }
 }
 export default showProfileReducer