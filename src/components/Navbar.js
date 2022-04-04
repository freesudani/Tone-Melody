import React from "react";
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { pages } from "../data/navbarmenu";
import imgLogo from "../images/36ad5d7c035c4b129512b898e11cb9b0.png";

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
    textDecoration: "none",
    borderBottom: "3px solid transparent",
    transition: "all 250ms ease-in-out",
  },

  activepage: {
    borderBottom: "3px solid #000",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          disableRipple
          onClick={() => navigate("/home")}
        >
          <img src={imgLogo} alt="Logo" className={classes.logo} />
        </IconButton>
        <Box className={classes.pages}>
          {pages.map((page) => (
            <NavLink
              to={page.path}
              key={page.name}
              className={({ isActive }) =>
                [classes.page, isActive ? classes.activepage : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {page.name}
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
