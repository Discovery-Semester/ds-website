import {TOGGLE_DRAWER_ACTION} from "../actions/actionTypes";

export const toggleSideDrawer = open => {
    return {
        type: TOGGLE_DRAWER_ACTION,
        payload: open
    }
};