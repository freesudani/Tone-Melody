import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import homebg from "../images/blob-haikei.png";

const useStyles = makeStyles((theme) => ({
  music: {
    position: "relative",
    background: `url(${homebg})`,
    height: "100vh",
    backgroundSize: "cover",
    padding: theme.spacing(3),
  },
}));

const Music = () => {
  const classes = useStyles();

  return <Box className={classes.music}>Hello All</Box>;
};

export default Music;
