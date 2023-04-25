import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useHotelFilterStyles = makeStyles((theme: Theme) => ({
     root: {
          position: "absolute",
          top: 10,
          zIndex: 1000,
          width: "55%",
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // justifyContent: "center",
          gap: 8,
          paddingLeft: 8,
     },
     select: {
          width: "100%",
     },
     nameSearch: {
          width: "100%",
          backgroundColor: "#fff",
          border: "1px solid hsl(0, 0%, 80%)",
          outline: 0,
          padding: 8,
          borderRadius: 4,
     },
     // modalTitle: {
     //      margin: 0,
     //      padding: 0,
     //      color: "#202124",
     //      marginTop: theme.spacing(1),
     // },
     // modalHeaderContainer: {
     //      display: "flex",
     //      alignItems: "flex-start",
     //      justifyContent: "space-between",
     // },
     // modalTemperature: {
     //      fontSize: 60,
     //      fontWeight: 700,
     //      marginTop: theme.spacing(3),
     // },
     // iconContainer: {
     //      display: "flex",
     //      justifyContent: "center",
     //      alignItems: "center",
     //      flexDirection: "column",
     //      fontSize: 18,
     //      fontWeight: 500,
     //      color: "#808487",
     // },
}));
