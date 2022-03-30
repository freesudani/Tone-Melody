import React from "react";
import { Box, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import imgLogo from "../images/36ad5d7c035c4b129512b898e11cb9b0.png";
import { makeStyles } from "@mui/styles";
import { pages } from "../data/navbarmenu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100vw",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    maxWidth: "9rem",
    height: "auto",
  },
  pages: {
    paddingTop: theme.spacing(2),
  },
  page: {
    marginLeft: theme.spacing(3),
    textTransform: "capitalize",
    color: theme.palette.text.primary,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          disableRipple
        >
          <img src={imgLogo} alt="Logo" className={classes.logo} />
        </IconButton>
        <Box className={classes.pages}>
          {pages.map((page) => (
            <Button key={page} className={classes.page}>
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;