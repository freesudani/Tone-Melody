import React from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import homebg from "../images/blob-haikei.png";
import { Button, Typography } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";

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
