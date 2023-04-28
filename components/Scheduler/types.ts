export interface SchedulerProps {
     initialTab?: number;
     onClick?: (
          data: SearchParams,
          coordinates: Coordinates,
          setLoading: React.Dispatch<React.SetStateAction<boolean>>,
     ) => void;
     hotelsOnly?: boolean;
     flightsOnly?: boolean;
     onTabSwitch?: (tab: string) => void;
}

export interface SearchParams {
     nameOrCity: string;
     numOfAdults: number;
     dateRange: Date[] | any[];
}

export interface Coordinates {
     lat: number;
     lng: number;
}
