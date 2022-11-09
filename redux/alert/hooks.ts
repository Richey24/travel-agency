import { useCustomDispatch } from "../types";

type AlertTypes = "success" | "error" | "info" | "clear";

export const useAlert = () => {
    const dispatch = useCustomDispatch();

    return (type: AlertTypes, message: string) => {
        switch (type) {
            case "success":
                dispatch({
                    type: "ALERT_SUCCESS",
                    payload: message,
                });
            case "clear":
                dispatch({
                    type: "ALERT_CLEAR",
                    payload: message,
                });
            case "info":
                dispatch({
                    type: "ALERT_INFO",
                    payload: message,
                });
            case "error":
                dispatch({
                    type: "ALERT_FAILURE",
                    payload: message,
                });
            default:
                dispatch({
                    type: "ALERT_SUCCESS",
                    payload: message,
                });
        }
    };
};
