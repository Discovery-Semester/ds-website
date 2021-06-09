import { Reducer } from 'redux';
import {ActionTypes, IUIState, UIActions} from '../actions/actionTypes';

const initialUIState: IUIState = {
    sideDrawerOpen: false
};

const uiReducer: Reducer<IUIState, UIActions> = (state = initialUIState, action) => {
    if (action.type === ActionTypes.TOGGLE_DRAWER) {
        return {
            ...state,
            sideDrawerOpen: action.payload
        };
    } else {
        return state;
    }
};

export default uiReducer;