import {CHANGE_LANGUAGE_ACTION} from "../actions/actionTypes";

export const changeLanguage = language => {
    return {
        type: CHANGE_LANGUAGE_ACTION,
        payload: language
    }
};