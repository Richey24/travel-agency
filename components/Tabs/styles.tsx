import { makeStyles } from "@mui/styles";

export const useTabStyles = makeStyles(() => ({
     root: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0px 16px",
          marginBottom: 8,
     },
     container: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
     },
     btn: {
          border: "!px solid red !important",
          fontSize: 18,
          fontWeight: 80,
          padding: "8px 32px !important",
     },
}));
