import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useListContainerStyles = makeStyles((theme: Theme) => ({
     sortContainer: {
          display: "flex !important",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
     },
     select: {
          flex: 1,
     },
}));
