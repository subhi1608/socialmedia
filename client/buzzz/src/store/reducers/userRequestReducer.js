import { ActionTypes } from "../contents/action-type";

const initialState={
    users:[]
}
const userRequestReducer =(state=initialState,{type,payload})=>{
switch (type) {
    case ActionTypes.SHOW_REQUESTS:
        return{...state,users:payload}
        case ActionTypes.ACCEPT_USER:
                const data = state.users.filter(item=>item._id!==payload._id);
                console.log('from reducer',data,state)

                return {...state,data}
    default:
        return state;
}
}
export default userRequestReducer