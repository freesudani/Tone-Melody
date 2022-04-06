import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";
import homebg from "../images/blob-haikei.png";

const useStyles = makeStyles((theme) => ({
  notfound: {
    position: "relative",
    background: `url(${homebg})`,
    height: "100vh",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("s9")]: {
    height: "80vh",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.notfound}>
      <Typography variant="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="info"
        endIcon={<KeyboardReturnIcon />}
        onClick={() => navigate("/home")}
      >
        Back To Home
      </Button>
    </Box>
  );
};

export default NotFound;
