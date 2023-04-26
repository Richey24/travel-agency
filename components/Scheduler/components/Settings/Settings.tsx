import React, { FC, useState } from "react";
import { useSettingsStyles } from "./styles";
import { Button } from "@mui/material";
import { Adder } from "../Adder/Adder";
import { SettingsProps } from "./types";

export const Settings: FC<SettingsProps> = ({ counts, setCounts, onDone }) => {
     const classes = useSettingsStyles();

     return (
          <div className={classes.root}>
               <div className={classes.typesContainer}>
                    <label>Adults</label>
                    <Adder
                         setCount={(count) => setCounts((prev) => ({ ...prev, adults: count }))}
                         defaultValue={counts.adults}
                    />
               </div>
               <div className={classes.typesContainer}>
                    <label>Children</label>
                    <Adder
                         setCount={(count) => setCounts((prev) => ({ ...prev, children: count }))}
                    />
               </div>{" "}
               <div className={classes.typesContainer}>
                    <label>Rooms</label>

                    <Adder
                         defaultValue={counts.rooms}
                         setCount={(count) => setCounts((prev) => ({ ...prev, rooms: count }))}
                    />
               </div>
               <Button className={classes.doneBtn} variant="outlined" onClick={onDone}>
                    Done
               </Button>
          </div>
     );
};
