// import { Button } from "@mui/material";
import React, { FC } from "react";
// import { useSelector } from "react-redux";
// import { RootStateProps } from "../../redux/types";
import { useNavStyles } from "./styles";

export const Nav: FC<any> = ({ children }) => {
    const classes = useNavStyles();
    return <div className={classes.root}>nav</div>;
};
