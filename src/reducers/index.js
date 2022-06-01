import { combineReducers } from "redux";
import issReducer from "./issReducer";
import peopleReducer from './peopleReducer';

export default combineReducers({ issReducer, peopleReducer });