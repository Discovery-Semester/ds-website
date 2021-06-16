import { ActionTypes, ILanguageState, LanguageActions } from '../actions/actionTypes';
import constants from "../../utils/constants";
import deTranslation from "../../utils/deTranslation";
import enTranslation from "../../utils/enTranslation";
import { Reducer } from 'redux';

const initialLanguageState: ILanguageState = {
    languages: [
        constants.languages.EN,
        constants.languages.DE
    ],
    defaultLanguage: constants.languages.EN,
    currentLanguage: constants.languages.EN,
    translation: enTranslation
};

const languageReducer: Reducer<ILanguageState, LanguageActions> = (state = initialLanguageState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_LANGUAGE:
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