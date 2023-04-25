import { Theme, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useSchedulerStyles = makeStyles((theme: Theme) => ({
     container: {
          width: "100%",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          border: "1px solid red",
     },
     root: {
          width: "90%",
     },
     form: {
          width: "100%",
          backgroundColor: "#fafafa",
          padding: "32px",
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
          padding: "8px 32px",
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
          padding: "8px 32px",
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
          padding: "16px 40px",
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
