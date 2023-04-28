export interface HotelActionProps {
     type: "SET_ALL_HOTEL_DATA" | "SET_HOTEL_OFFERS";
     payload: string | any;
}

export interface OffersField {
     type: string;
     hotel: {
          type: string;
          hotelId: string;
          chainCode: string;
          dupeId: string;
          name: string;
          cityCode: string;
          latitude: number;
          longitude: number;
     };
     available: boolean;
     offers: OfferField[];
     self: string;
}

export interface OfferField {
     id: string;
     checkInDate: Date | string;
     checkOutDate: Date | string;
     rateCode: string;
     commission: {
          percentage: string;
     };
     boardType: string;
     room: {
          type: string;
          typeEstimated: {
               category: string;
               beds: number;
               bedType: string;
          };
          description: {
               text: string;
               lang: string;
          };
     };
     guests: {
          adults: number;
     };
     price: {
          currency: string;
          total: string | number;
          variations: {
               average: {
                    total: string | number;
               };
               changes: [
                    {
                         startDate: Date | string;
                         endDate: Date | string;
                         total: string | number;
                    },
               ];
          };
     };
     policies: {
          guarantee: {
               acceptedPayments: {
                    creditCards: string[];
                    methods: ["CREDIT_CARD"];
               };
          };
          paymentType: string;
          cancellation: {
               deadline: string;
          };
     };
     self: string;
}
