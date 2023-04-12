import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootStateProps } from "../../redux/types";
import { useLayoutStyles } from "./styles";
import { TopNav } from "../TopNav/TopNav";
import { Nav } from "../Nav/Nav";
import { BottomFooter } from "../BottomFooter/BottomFooter";
import { Footer } from "../Footer/Footer";

export const Layout: FC<any> = ({ children }) => {
     const classes = useLayoutStyles();
     const alert = useSelector((state: RootStateProps) => state.alertReducer);

     return (
          <div className={classes.root}>
               <div className="front">
                    <div id="main">
                         <TopNav />
                         <Nav />
                         {children}
                         <Footer />
                         <BottomFooter />
                    </div>
               </div>
          </div>
     );
};
