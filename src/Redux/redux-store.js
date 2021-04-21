import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer"
import loginReducer from './loginReducer'
import newsReducer from './newsReducer'


 let reducers = combineReducers({
    profilePage: profileReducer,
    loginPage:loginReducer,
    newsPage:newsReducer,
});

let store = createStore(reducers);

export default store;