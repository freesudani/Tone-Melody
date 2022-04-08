import React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
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
    [theme.breakpoints.down("mobile")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("s9")]: {
      height: "80vh",
    },
  },

  socialmedia: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("lg")]: {
      marginRight: theme.spacing(0),
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("mobile")]: {
      flexDirection: "row",
    },
  },

  twitter: {
    backgroundColor: "transparent",
    fontSize: "3.5rem",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    [theme.breakpoints.down("lg")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
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
    [theme.breakpoints.down("lg")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
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
    [theme.breakpoints.down("lg")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
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
    [theme.breakpoints.down("lg")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
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
    [theme.breakpoints.down("lg")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    "&:hover": {
      color: "#66b447",
    },
  },

  phone: {
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(-8),
    },
  },
  button: {
    marginLeft: theme.spacing(20),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(8),
    },
    [theme.breakpoints.down("mobile")]: {
      marginLeft: theme.spacing(0),
    },
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1200px
  const MQmb = useMediaQuery(theme.breakpoints.down("mobile")); //400px
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
        <Typography
          variant={MQmb ? "h5" : MQlg ? "h4" : "h3"}
          align="center"
          gutterBottom
        >
          or Contact us at
        </Typography>
        <Typography
          variant={MQmb ? "h4" : MQlg ? "h3" : "h2"}
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
