import {createStore} from "redux";
import AllReducers from "./reducers/AllReducers";

const initialStates={auth:{loggedIn:false,user:{}}}

const store = createStore(AllReducers, initialStates)   //createStore needs first param as reducer

export default store;