import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AlertReducerField } from "./alert/alertReducer";
import { AlertActionProps } from "./alert/types";
import { AppStateActionProps } from "./appState/types";
import { AppSateReducerField } from "./appState/appReducer";
import { HotelReducerField } from "./hotels/hotelReducer";
import { HotelActionProps } from "./hotels/types";

export type DispatchProps = AlertActionProps | AppStateActionProps | HotelActionProps;

export const useCustomDispatch = () => {
     const dispatch = useDispatch<Dispatch<DispatchProps>>();
     return dispatch;
};

export type RootStateProps = {
     alertReducer: AlertReducerField;
     appStateReducer: AppSateReducerField;
     hotelReducer: HotelReducerField;
};
