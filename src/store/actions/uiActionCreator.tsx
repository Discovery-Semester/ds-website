import { ActionCreator } from "redux";
import { ActionTypes, IToggleDrawerAction } from "./actionTypes";

export const toggleSideDrawer: ActionCreator<IToggleDrawerAction> = (open:any) => {
    return {
        type: ActionTypes.TOGGLE_DRAWER,
        payload: open
    }
};