import React, { FC } from "react";
import { useHotelFilterStyles } from "./styles";
import { HotelFilterProps } from "./types";
import CreatableSelect from "react-select/creatable";
import { useSelector } from "react-redux";
import { RootStateProps, useCustomDispatch } from "../../../../redux/types";

export const HotelFilter = () => {
     const classes = useHotelFilterStyles();
     const appState = useSelector((state: RootStateProps) => state.appStateReducer);
     const dispatch = useCustomDispatch();

     const handleFilterName = (name: string) => {
          dispatch({
               type: "SET_MAP_PARAMS",
               payload: { ...appState?.mapParams, name },
          });
     };

     return (
          <div className={classes.root}>
               <input
                    type="text"
                    className={classes.nameSearch}
                    placeholder={"Filter By Name"}
                    onKeyUp={(event) => handleFilterName((event.target as any)?.value as string)}
               />

               <CreatableSelect
                    options={[]}
                    // onChange={setSelectedBasalTemplate}
                    className={`react-select ${classes.select}`}
                    classNamePrefix="select"
                    placeholder={"Filter By Stars"}
               />
               <input type="number" className={classes.nameSearch} placeholder={"Price (Low)"} />
               <input type="number" className={classes.nameSearch} placeholder={"Price (High)"} />
          </div>
     );
};
