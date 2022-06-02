import { combineReducers } from "redux";
import issReducer from "./issReducer";
import peopleReducer from './peopleReducer';
import photoReducer from "./photoReducer";

export default combineReducers({ issReducer, peopleReducer, photoReducer });