import { ActionCreator } from "redux";
import { ActionTypes, IChangeLanguageAction } from "./actionTypes";

export const changeLanguage: ActionCreator<IChangeLanguageAction> = (
  language:string
) => {
  return {
    type: ActionTypes.CHANGE_LANGUAGE,
    payload: language,
  };
};
