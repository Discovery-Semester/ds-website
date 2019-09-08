import {CHANGE_LANGUAGE_ACTION} from '../actions/actionTypes';
import constants from "../../common/constants";
import deTranslation from "../../common/deTranslation";
import enTranslation from "../../common/enTranslation";

const initialState = {
    languages: [
        constants.languages.EN,
        constants.languages.DE
    ],
    defaultLanguage: constants.languages.EN,
    currentLanguage: constants.languages.EN,
    translation: enTranslation
};

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE_ACTION:
            switch (action.payload) {
                case constants.languages.EN:
                    return {
                        ...state,
                        translation: enTranslation,
                        currentLanguage: constants.languages.EN
                    };
                case constants.languages.DE:
                    return {
                        ...state,
                        translation: deTranslation,
                        currentLanguage: constants.languages.DE
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default languageReducer;