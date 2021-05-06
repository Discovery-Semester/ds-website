import { ActionCreator } from "redux";
import { ActionTypes, IChangeLanguageAction } from "./actionTypes";

// TODO: Add type to action
export const changeLanguage: ActionCreator<IChangeLanguageAction> = (
  language: any
) => {
  return {
    type: ActionTypes.CHANGE_LANGUAGE,
    payload: language,
  };
};
