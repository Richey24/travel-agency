import { HotelActionProps, OffersField } from "./types";

export interface HotelReducerField {
     hotelParams: {
          numOfAdults: number;
          dateRange: any[];
          lat: number | null;
          lng: number | null;
     };
     hotelOffers: OffersField[] | null;
     hotels: any[] | null;
}

const hotelInitailState: HotelReducerField = {
     hotels: null,
     hotelOffers: null,
     hotelParams: {
          numOfAdults: 1,
          dateRange: [],
          lat: null,
          lng: null,
     },
};

export function hotelReducer(state = hotelInitailState, action: HotelActionProps) {
     switch (action.type) {
          case "SET_ALL_HOTEL_DATA":
               return {
                    ...state,
                    ...action.payload,
               };

          default:
               return state;
     }
}
