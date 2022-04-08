import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from "@mui/icons-material/Apple";
import FAQModal from "./FAQ";
import PrivacyModal from "./Privacy";
import PDModal from "./PersonalData";
import ContactModal from "./Contact";
import imgLogo from "../images/36ad5d7c035c4b129512b898e11cb9b0_prev_ui.png";
import footerbg from "../images/blob-haikei (1).png";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    background: `url(${footerbg})`,
    height: "60vh",
    backgroundSize: "cover",
    padding: theme.spacing(6),
    [theme.breakpoints.down("lg")]: {
      height: "100%",
      padding: theme.spacing(1.7),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("mobile")]: {
      padding: theme.spacing(1),
    },
  },

  form: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  moreinfo: {
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      fontSize: "1rem",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },

  info: {
    [theme.breakpoints.down("mobile")]: {
      "&.MuiButton-textSizeSmall": {
        fontSize: "1rem",
      },
    },
  },

  logo: {
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(1.5),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(10),
    },
  },

  socialmedia: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },

  twitter: {
    backgroundColor: "transparent",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: "#00acee",
    },
  },

  facebook: {
    backgroundColor: "transparent",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: "#3b5998",
    },
  },

  instagram: {
    backgroundColor: "transparent",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: "#3f729b",
    },
  },

  youtube: {
    backgroundColor: "transparent",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: "#cd201f",
    },
  },

  apple: {
    backgroundColor: "transparent",
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: "#66b447",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const MQs9 = useMediaQuery(theme.breakpoints.down("s9")); //360px
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px
  const MQsm = useMediaQuery(theme.breakpoints.down("sm")); //600px
  const MQmb = useMediaQuery(theme.breakpoints.down("mobile")); //400px
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1200px

  const emailHandler = (event) => {
    event.preventdefault();
  };

  return (
    <Box className={classes.footer}>
      <Grid container xs={12} spacing={3}>
        <Grid item mobile={12} sm={5}>
          <Typography
            variant={MQmd ? "h6" : "h5"}
            align={MQsm ? "center" : "left"}
          >
            The Latest
          </Typography>
          <Typography
            variant={MQmd ? "caption" : "body2"}
            color="textPrimary"
            gutterBottom
            align={MQsm ? "center" : "left"}
          >
            Stay up to date on the latest Journey merch released and tour dates
            for 2021 + Beyond
          </Typography>
          <form className={classes.form}>
            <Box>
              <TextField
                name="email"
                label="Email"
                size="small"
                fullWidth={MQsm ? "true" : "false"}
              />
            </Box>
            <Box style={{ marginTop: `${MQlg && "0.5rem"}${MQsm && "1rem"}` }}>
              <Button
                type="submit"
                variant="contained"
                size={MQmd ? "small" : "medium"}
                onClick={emailHandler}
                fullWidth={MQsm ? "true" : "false"}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item mobile={12} sm={3}>
          <Typography
            variant={MQmd ? "h6" : "h5"}
            align={MQsm ? "center" : "left"}
          >
            More Info
          </Typography>
          <Box className={classes.moreinfo}>
            <Box>
              <Button
                size="small"
                color="inherit"
                className={classes.info}
                onClick={handleOpen3}
              >
                Contact
              </Button>
            </Box>
            <Box>
              <Button
                size="small"
                color="inherit"
                className={classes.info}
                onClick={handleOpen}
              >
                FAQs
              </Button>
            </Box>
            <Box>
              <Button
                size="small"
                color="inherit"
                className={classes.info}
                onClick={handleOpen1}
              >
                Privacy
              </Button>
            </Box>
            <Box>
              <Button
                size="small"
                color="inherit"
                className={classes.info}
                onClick={handleOpen2}
              >
                You Data
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item mobile={12} sm={4}>
          {!MQmb && (
            <IconButton
              size={MQmd ? "small" : "large"}
              edge="start"
              color="inherit"
              aria-label="logo"
              disableRipple
              className={classes.logo}
            >
              <img src={imgLogo} alt="Logo" className={classes.logo} />
            </IconButton>
          )}

          {!MQmb && (
            <Box className={classes.socialmedia}>
              <IconButton aria-label="twitter" disableFocusRipple disableRipple>
                <TwitterIcon
                  className={classes.twitter}
                  fontSize={MQmd ? "small" : "medium"}
                />
              </IconButton>
              <IconButton
                aria-label="facebook"
                disableFocusRipple
                disableRipple
              >
                <FacebookIcon
                  className={classes.facebook}
                  fontSize={MQmd ? "small" : "medium"}
                />
              </IconButton>
              <IconButton
                aria-label="instagram"
                disableFocusRipple
                disableRipple
              >
                <InstagramIcon
                  className={classes.instagram}
                  fontSize={MQmd ? "small" : "medium"}
                />
              </IconButton>
              <IconButton aria-label="Youtube" disableFocusRipple disableRipple>
                <YouTubeIcon
                  className={classes.youtube}
                  fontSize={MQmd ? "small" : "medium"}
                />
              </IconButton>
              <IconButton aria-label="Apple" disableFocusRipple disableRipple>
                <AppleIcon
                  className={classes.apple}
                  fontSize={MQmd ? "small" : "medium"}
                />
              </IconButton>
            </Box>
          )}
          <Typography variant={MQs9 ? "song" : "caption"}>
            © 2022 Tone&Melody. All Rights reserved.
          </Typography>
        </Grid>
      </Grid>
      <FAQModal open={open} handleClose={handleClose} />
      <PrivacyModal open={open1} handleClose={handleClose1} />
      <PDModal open={open2} handleClose={handleClose2} />
      <ContactModal open={open3} handleClose={handleClose3} />
    </Box>
  );
};

export default Footer;
