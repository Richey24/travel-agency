import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootStateProps } from "../../redux/types";
import { useLayoutStyles } from "./styles";

export const Layout: FC<any> = ({ children }) => {
    const classes = useLayoutStyles();
    const alert = useSelector((state: RootStateProps) => state.alertReducer);

    return <div className={classes.root}>{children}</div>;
};
