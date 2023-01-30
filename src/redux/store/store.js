import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from "../reducer/contactReducer";

export default createStore(contactReducer,composeWithDevTools());