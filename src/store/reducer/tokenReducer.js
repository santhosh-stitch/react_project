import { SET_TOKEN, REMOVE_TOKEN } from "../Type/actionType";

const token = (state = null, action ) => {
    switch(action.type){
        case SET_TOKEN:
            return { ...state, token: action.payload };
        case REMOVE_TOKEN:
            return null;
         default:
            return state;
    }
}

export default token;