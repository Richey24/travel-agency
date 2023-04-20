import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AlertReducerField } from "./alert/alertReducer";
import { AlertActionProps } from "./alert/types";
import { AppStateActionProps } from "./appState/types";
import { AppSateReducerField } from "./appState/appReducer";

export type DispatchProps = AlertActionProps | AppStateActionProps;

export const useCustomDispatch = () => {
     const dispatch = useDispatch<Dispatch<DispatchProps>>();
     return dispatch;
};

export type RootStateProps = {
     alertReducer: AlertReducerField;
     appStateReducer: AppSateReducerField;
};
