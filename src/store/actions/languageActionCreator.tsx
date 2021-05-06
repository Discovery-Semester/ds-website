import {CHANGE_LANGUAGE_ACTION} from "./actionTypes";


// TODO: Add type to action
export const changeLanguage = (language:any) => {
    return {
        type: CHANGE_LANGUAGE_ACTION,
        payload: language
    }
};