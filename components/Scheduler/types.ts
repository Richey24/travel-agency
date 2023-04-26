export interface SchedulerProps {
     initialTab?: number;
     onClick?: (data: SearchParams) => void;
     hotelsOnly?: boolean;
     flightsOnly?: boolean;
     onTabSwitch?: (tab: string) => void;
}

export interface SearchParams {
     nameOrCity: string;
     numOfAdults: number;
     dateRange: Date[] | any[];
}
