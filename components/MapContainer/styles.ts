import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMapContainerStyles = makeStyles((theme: Theme) => ({
     root: {
          height: "500px",
          borderRadius: 20,
          position: "relative",
          overflow: "hidden",
     },
     back: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 1000,
          top: "50%",
          left: 8,
          flexDirection: "column",
          fontWeight: 600,
          color: "#636363",
          fontSize: 14,
     },
     icon: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 16px",
          backgroundColor: "#fff",
          borderRadius: 8,
     },
}));
