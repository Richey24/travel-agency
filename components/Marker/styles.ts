import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";


export const useMarkerStyles = makeStyles((theme: Theme) => ({
     root: {
          borderBottomColor: "transparent",
          borderRadius: 20,
          cursor: "pointer",
          position: "relative",
     },
     pointer: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
     },
     price: {
          margin: 0,
          padding: 0,
          fontSize: 16,
          fontWeight: 700,
          color: "#022646",
     },
}));
