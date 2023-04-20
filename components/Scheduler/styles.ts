import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useSchedulerStyles = makeStyles((theme: Theme) => ({
     tabContainer: {
          display: "flex",
          alignItem: "center",
          justifyContent: "flex-start",
     },
     tab: {
          backgroundColor: "#00a99d",
          color: "#fff",
          fontWeight: 600,
          padding: theme.spacing(2, 4),
          cursor: "pointer",
          "&:hover": {
               color: "#00a99d",
               backgroundColor: "#fff",
          },
     },
     activeTab: {},
}));
