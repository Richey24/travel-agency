import { ReactNode } from "react";
import { OffersField } from "../../redux/hotels/types";

export interface MarkerProps {
     onClick: (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
     children?: ReactNode;
     offer: OffersField;
}
