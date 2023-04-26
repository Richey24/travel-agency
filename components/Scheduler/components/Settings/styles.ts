import { Theme, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useSettingsStyles = makeStyles((theme: Theme) => ({
     root: {
          boxShadow: "0 2px 16px 0 rgba(26,26,26,0.24)",
          width: 300,
          padding: 16,
          borderRadius: 8,
          zIndex: 3000,
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
     },
     doneBtn: {
          width: "100%",
          height: 35,
     },
     typesContainer: {
          width: "100%",
          padding: "4px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "Raleway",
          fontSize: 14,
          color: "#636363",
          lineHeight: 1,
          paddingBottom: 10,
          fontWeight: 600,
          marginBottom: 0,
          whiteSpace: "nowrap",
     },
}));
