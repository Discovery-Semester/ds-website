export enum ActionTypes {
    CHANGE_LANGUAGE = "CHANGE_LANGUAGE_ACTION",
    TOGGLE_DRAWER = "TOGGLE_DRAWER_ACTION"
}

export interface IChangeLanguageAction {
    type: ActionTypes.CHANGE_LANGUAGE,
    payload: string,
}

export interface IToggleDrawerAction {
    type: ActionTypes.TOGGLE_DRAWER,
    payload: boolean
}


// TODO: The states should have only readonly properties, but the keyword doesn't seem to be working.

export interface IUIState {
    sideDrawerOpen: boolean,
}

export interface ILanguageState {
    languages: string[],
    defaultLanguage: string,
    currentLanguage: string,
    translation: any,
}

export type LanguageActions = IChangeLanguageAction; // use union type "|" to add language actions

export type UIActions = IToggleDrawerAction; // use union type "|" to add UI actions