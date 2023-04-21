import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useSchedulerStyles = makeStyles((theme: Theme) => ({
     container: {
          width: "100%",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
     },
     root: {
          width: "80%",
     },
     form: {
          width: "100%",
          backgroundColor: "#fafafa",
          padding: theme.spacing(4),
          display: "flex",
          alignItem: "flex-end",
          justifyContent: "space-between",
          gap: 8,
          flexWrap: "wrap",
     },
     tabContainer: {
          display: "flex",
          alignItem: "center",
          justifyContent: "flex-start",
     },
     tab: {
          backgroundColor: "#00a99d",
          color: "#fff",
          fontWeight: 600,
          padding: theme.spacing(1, 4),
          cursor: "pointer",
          textTransform: "capitalize",

          "&:hover": {
               color: "#fff",
               backgroundColor: "#06d0c2",
          },
     },
     activeTab: {
          backgroundColor: "#fff",
          color: "#00a99d",
          fontWeight: 600,
          padding: theme.spacing(1, 4),
          cursor: "pointer",
          textTransform: "capitalize",
          "&:hover": {
               color: "#00a99d",
               backgroundColor: "#fff",
          },
     },
     select: {},
     inputContainer: {
          minWidth: 100,
          flex: 1,
          display: "flex",
          alignItem: "flex-end",
          justifyContent: "center",
          flexDirection: "column",
          "& > label": {
               fontFamily: "Raleway",
               fontSize: 14,
               color: "#636363",
               lineHeight: 1,
               paddingBottom: 10,
               display: "block",
               fontWeight: 600,
               marginBottom: 0,
               whiteSpace: "nowrap",
          },
     },
     searchBtn: {
          backgroundColor: "#00a99d",
          color: "#fff",
          padding: theme.spacing(2, 5),
          fontFamily: "Raleway",
          fontSize: 14,
          lineHeight: 1,
          fontWeight: 600,
          whiteSpace: "nowrap",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
     },
}));
