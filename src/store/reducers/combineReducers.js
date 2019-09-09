import {combineReducers} from "redux";
import languages from './languageReducer';
import ui from './uiReducer';

export default combineReducers({
    languages,
    ui
});