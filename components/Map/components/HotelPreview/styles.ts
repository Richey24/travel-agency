import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useHotelPreviewStyles = makeStyles((theme: Theme) => ({
     root: {
          backgroundColor: "white",
          padding: "16px 8px",
          minWidth: 200,
          position: "absolute",
          top: "100%",
          zIndex: 1000000000,
          "& > p": {
               color: "black",
               fontSize: 18,
               fontWeight: 800,
          },
     },
     detailsContainer: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
     },
     ratingContainer: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 6,
          fontWeight: 600,
          fontSize: 14,
          textTransform: "capitalize",
     },
     ratingBox: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px 6px",
          backgroundColor: "#00a99d",
          color: "#fff",
          fontWeight: 700,
     },
     price: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 6,
          fontWeight: 600,
          fontSize: 14,
          textTransform: "capitalize",
          color: "#000",
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
