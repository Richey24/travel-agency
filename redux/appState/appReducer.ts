import { AppStateActionProps } from "./types";

export interface AppSateReducerField {
     routeName: string;
     mapParams: {
          name: string;
          priceLow: string | number | null;
          priceHigh: string | number | null;
          stars: string | number | null;
     };
}

const authInitailState: AppSateReducerField = {
     routeName: "home",
     mapParams: {
          name: "",
          priceHigh: null,
          priceLow: null,
          stars: null,
     },
};

export function appStateReducer(state = authInitailState, action: AppStateActionProps) {
     switch (action.type) {
          case "SET_ROUTE_NAME":
               return {
                    ...state,
                    routeName: action.payload,
               };
          case "SET_MAP_PARAMS":
               return {
                    ...state,
                    mapParams: action.payload,
               };
          default:
               return state;
     }
}
