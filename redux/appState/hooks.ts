import axios from "axios";
import { useCustomDispatch } from "../types";
import { Coordinates, SearchParams } from "../../components/Scheduler/types";
import { toast } from "react-toastify";
import _ from "lodash";

export const useSetRouteName = () => {
     const dispatch = useCustomDispatch();

     return (name: string) => {
          dispatch({
               type: "SET_ROUTE_NAME",
               payload: name,
          });
     };
};
