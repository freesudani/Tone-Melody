import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from "@mui/icons-material/Apple";
import { motion } from "framer-motion";
import { zoomoutVariants } from "../animations/motion-variants";
import homebg from "../images/blob-haikei.png";

const useStyles = makeStyles((theme) => ({
  contact: {
    position: "relative",
    background: `url(${homebg})`,
    height: "100vh",
    backgroundSize: "cover",
    padding: theme.spacing(7),
    paddingTop: theme.spacing(20),
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  socialmedia: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginRight: theme.spacing(2),
  },

  twitter: {
    backgroundColor: "transparent",
    fontSize: "3.5rem",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: "#00acee",
    },
  },

  facebook: {
    backgroundColor: "transparent",
    fontSize: "3.5rem",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: "#3b5998",
    },
  },

  instagram: {
    backgroundColor: "transparent",
    fontSize: "3.5rem",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: "#3f729b",
    },
  },

  youtube: {
    backgroundColor: "transparent",
    fontSize: "3.5rem",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: "#cd201f",
    },
  },

  apple: {
    backgroundColor: "transparent",
    fontSize: "3.5rem",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: "#66b447",
    },
  },

  phone: {
    textTransform: "capitalize",
  },
  button: {
    marginLeft: theme.spacing(20),
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  return (
    <Box className={classes.contact}>
      <Box
        component={motion.div}
        variants={zoomoutVariants}
        initial="hidden"
        animate="visible"
        className={classes.socialmedia}
      >
        <IconButton aria-label="twitter" disableFocusRipple disableRipple>
          <TwitterIcon className={classes.twitter} />
        </IconButton>
        <IconButton aria-label="facebook" disableFocusRipple disableRipple>
          <FacebookIcon className={classes.facebook} />
        </IconButton>
        <IconButton aria-label="instagram" disableFocusRipple disableRipple>
          <InstagramIcon className={classes.instagram} />
        </IconButton>
        <IconButton aria-label="Youtube" disableFocusRipple disableRipple>
          <YouTubeIcon className={classes.youtube} />
        </IconButton>
        <IconButton aria-label="Apple" disableFocusRipple disableRipple>
          <AppleIcon className={classes.apple} />
        </IconButton>
      </Box>
      <Box className={classes.phone}>
        <Typography variant="h3" align="center" gutterBottom>
          or Contact us at
        </Typography>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold", backdropFilter: "blur(3px)" }}
        >
          817-541-8512
        </Typography>
        <Box className={classes.button}>
          <Button variant="contained" color="warning">
            Make Reservation
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
