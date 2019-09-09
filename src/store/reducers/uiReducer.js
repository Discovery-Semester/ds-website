import {TOGGLE_DRAWER_ACTION} from '../actions/actionTypes';

const initialState = {
    sideDrawerOpen: false
};

const uiReducer = (state = initialState, action) => {
    if (action.type === TOGGLE_DRAWER_ACTION) {
        return {
            ...state,
            sideDrawerOpen: action.payload
        };
    } else {
        return state;
    }
};

export default uiReducer;