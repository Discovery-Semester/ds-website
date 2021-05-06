import {TOGGLE_DRAWER_ACTION} from '../actions/actionTypes';

const initialState = {
    sideDrawerOpen: false
};

// TODO: Add type to action
const uiReducer = (state = initialState, action:any) => {
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