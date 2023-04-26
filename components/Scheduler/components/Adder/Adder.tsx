import React, { useEffect, useState } from "react";
import { useAdderStyles } from "./styles";
import { Button } from "@mui/material";
import { IoAdd } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";

export const Adder = ({
     setCount,
     defaultValue,
}: {
     setCount: (count: number) => void;
     defaultValue?: number;
}) => {
     const classes = useAdderStyles();
     const [counter, setCounter] = useState(defaultValue ?? 0);

     useEffect(() => {
          setCount(counter);
     }, [counter]);

     return (
          <div className={classes.root}>
               <Button
                    onClick={() => setCounter((prev) => (prev > 0 ? prev - 1 : 0))}
                    className={classes.btn}
               >
                    <BiMinus size={18} />
               </Button>
               <span>{counter}</span>
               <Button onClick={() => setCounter((prev) => prev + 1)} className={classes.btn}>
                    <IoAdd size={18} />
               </Button>
          </div>
     );
};
