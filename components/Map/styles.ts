import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useMapStyles = makeStyles((theme: Theme) => ({
     root: {
          height: "calc(100vh - 64px)",
          borderRadius: 20,
          [theme.breakpoints.down("sm")]: {
               height: "100%",
          },
     },
     modalTitle: {
          margin: 0,
          padding: 0,
          color: "#202124",
          // marginTop: theme.spacing(1),
     },
     modalHeaderContainer: {
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
     },
     modalTemperature: {
          fontSize: 14,
          fontWeight: 700,
          marginTop: theme.spacing(3),
     },
     iconContainer: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: 14,
          fontWeight: 500,
          color: "#808487",
     },
     firstContainer: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 8,
     },
     titleImage: {
          width: 100,
          height: 100,
          borderRadius: 4,
     },
     titleDetailsContainer: {
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 8,

          "&>p": { flex: 1, fontWeight: 600, color: "#000", fontSize: 18 },
     },
     titleIconsContainer: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
     },
     secondContainer: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 8,
     },
     viewMoreBtn: {},
     price: {
          fontWeight: 700,
          fontSize: 18,
          color: "#000",
     },
     subTitle: {
          fontWeight: 600,
          fontSize: 14,
          color: "#000",
     },

     texts: {},
     container: {},
     icon: {
          cursor: "pointer",
          fontSize: 25,
     },
     divider: {
          backgroundColor: "#ededed",
          width: "100%",
          height: 2,
          borderRadius: 20,
          margin: "18px 0px",
     },
     descriptionContainer: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          fontSize: 12,
     },
     cancellation: {
          color: "#008009",
          fontWeight: 600,
     },
}));
