import { KeyboardEvent } from "react";

export interface HotelFilterProps {
     handleFilterName: (event: KeyboardEvent<HTMLInputElement> | undefined) => void;
     handleFilterPriceLow?: (event: KeyboardEvent<HTMLInputElement> | undefined) => void;
     handleFilterPriceHigh?: (event: KeyboardEvent<HTMLInputElement> | undefined) => void;
     handleFilterStars?: (stars: number) => void;
}
