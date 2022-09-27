//import { createStore } from "react-redux";
import token from "../reducer/tokenReducer";
import thunk from "redux-thunk";
import {  persistStore } from "redux-persist";
//import storage from "redux-persist/lib/storage";
import { applyMiddleware,combineReducers,legacy_createStore as createStore } from "redux";
import storageLocal from "redux-persist/lib/storage";
import auth from "../reducer/authReducer";

const persistConfig = {
    key: 'root',
    storage: storageLocal
}
const reducer = combineReducers({
    tokenId:token,
    Auth:auth
});
// const persistedReducer = persistReducer(persistConfig, reducer);
// const store = createStore(persistedReducer, applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store;