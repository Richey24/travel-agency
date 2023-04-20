import { useCustomDispatch } from "../types";

export const useSetRouteName = () => {
     const dispatch = useCustomDispatch();

     return (name: string) => {
          dispatch({
               type: "SET_ROUTE_NAME",
               payload: name,
          });
     };
};
