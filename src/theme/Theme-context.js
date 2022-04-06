import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#a3c3d9",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      s9: 361,
      mobile: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Overpass", "Roboto", "sans-serif"].join(","),
    htmlFontSize: 10,
  },
  components: {
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "$labelcolor",
        },
      },
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: "song" },
          style: {
            fontWeight: 200,
            fontSize: "0.63rem",
            lineHeight: 0,
            letterSpacing: "0.022em",
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

const StyleProvider = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default StyleProvider;
