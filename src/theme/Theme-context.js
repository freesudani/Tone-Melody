import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a3c3d9",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Overpass", "Roboto", "sans-serif"].join(","),
    htmlFontSize: 10,
  },
});

const StyleProvider = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default StyleProvider;
