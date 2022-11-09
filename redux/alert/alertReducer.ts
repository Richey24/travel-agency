import { ALERT_SUCCESS, ALERT_FAILURE, ALERT_CLEAR, ALERT_INFO, AlertActionProps } from "./types";

const alertReducerInitData = {
    type: null,
    open: false,
    message: null,
    redirect: false,
};

export interface AlertReducerField {
    type: string | null;
    open: boolean;
    message: string | null;
    redirect: boolean;
}
export default function alertReducer(
    state: AlertReducerField = alertReducerInitData,
    action: AlertActionProps,
) {
    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                ...state,
                type: "success",
                open: true,
                message: action.payload,
                redirect: false,
            };

        case ALERT_FAILURE:
            return {
                ...state,
                type: "error",
                open: true,
                message: action.payload,
                redirect: false,
            };
        case ALERT_INFO:
            return {
                ...state,
                type: "info",
                open: true,
                message: action.payload,
                redirect: false,
            };
        case ALERT_CLEAR:
            return {
                ...state,
                open: false,
                redirect: true,
            };
        default:
            return state;
    }
}
