import React from "react";
import { useTabStyles } from "./styles";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const tablist = [
     {
          name: "Map",
          path: "/search/hotels",
     },
     {
          name: "List",
          path: "/booking/list/hotels",
     },
];

export const Tabs = () => {
     const classes = useTabStyles();
     const router = useRouter();

     return (
          <div className={classes.root}>
               <div className={classes.container}>
                    {tablist.map((tab, idx) => (
                         <Link href={tab.path} key={idx}>
                              <Button
                                   variant={tab.path === router.asPath ? "outlined" : "text"}
                                   className={classes.btn}
                              >
                                   {tab.name}
                              </Button>
                         </Link>
                    ))}
               </div>
          </div>
     );
};
