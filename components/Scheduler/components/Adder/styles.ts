import { Theme, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAdderStyles = makeStyles((theme: Theme) => ({
     root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #868686",
          maxWidth: 120,
          width: 120,
          gap: 8,
          borderRadius: 4,
     },
     btn: {
          padding: "8px !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "0px !important",
     },
}));
