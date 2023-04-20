import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useMapContainerStyles = makeStyles((theme: Theme) => ({
     root: {
          height: "500px",
          borderRadius: 20,
          position: "relative",
          overflow: "hidden",
     },
}));
