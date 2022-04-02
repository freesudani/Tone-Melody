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
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.1,
            letterSpacing: "0.02222em",
          },
        },
      ],
    },
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
