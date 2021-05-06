import {TOGGLE_DRAWER_ACTION} from "./actionTypes";

export const toggleSideDrawer = (open:any) => {
    return {
        type: TOGGLE_DRAWER_ACTION,
        payload: open
    }
};