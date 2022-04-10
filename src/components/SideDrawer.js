import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import { pages } from "../data/navbarmenu";
import imgLogo from "../images/36ad5d7c035c4b129512b898e11cb9b0_prev_ui.png";

const useStyles = makeStyles({
  drawer: {
    textDecoration: "none",
  },

  logo: {
    width: "12rem",
  },
});

const TemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((page, index) => (
          <ListItem button key={index}>
            <NavLink to={page.path} className={classes.drawer}>
              <ListItemText>
                <Typography variant="h6" color="textPrimary">
                  {page.name}
                </Typography>
              </ListItemText>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <img src={imgLogo} alt="logo" className={classes.logo} />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)} color="secondary" />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TemporaryDrawer;
