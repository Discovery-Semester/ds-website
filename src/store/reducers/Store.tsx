import {combineReducers, createStore, Store} from "redux";
import { ILanguageState, IUIState } from "../actions/actionTypes";
import languages from './languageReducer';
import ui from './uiReducer';

export interface IApplicationState {
    languages: ILanguageState,
    ui: IUIState,
}

const rootReducer = combineReducers<IApplicationState>({
    languages,
    ui
});

export default function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer);
    return store;
}


