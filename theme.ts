import { createTheme } from "@mui/material/styles";

// import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
     spacing: 4,
     palette: {
          secondary: {
               light: "#63b8ff",
               main: "#0989e3",
               dark: "#005db0",
               contrastText: "#000",
          },
          primary: {
               main: "#4db6ac",
               light: "#82e9de",
               dark: "#00867d",
               contrastText: "#000",
          },
     },
});
