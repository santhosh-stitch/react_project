import { SET_AUTH, REMOVE_AUTH } from "../Type/actionType";

const auth = (state =null, action) => {
    switch(action.type){
        case SET_AUTH:
            return {...state, auth: action.payload};
        case REMOVE_AUTH:
            return null;
        default:
            return state;
    }
}

export default auth;