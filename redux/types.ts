import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AlertReducerField } from "./alert/alertReducer";
import { AlertActionProps } from "./alert/types";

export type DispatchProps = AlertActionProps;

export const useCustomDispatch = () => {
    const dispatch = useDispatch<Dispatch<DispatchProps>>();
    return dispatch;
};

export type RootStateProps = {
    alertReducer: AlertReducerField;
};
