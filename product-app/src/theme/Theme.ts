import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#0c6fb5",
    },
  },
  typography: {
    fontFamily: "Roboto,sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
});

export default Theme;
