import React from "react";
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
import imgLogo from "../images/36ad5d7c035c4b129512b898e11cb9b0_prev_ui.png";
import footerbg from "../images/blob-haikei (1).png";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    background: `url(${footerbg})`,
    height: "60vh",
    backgroundSize: "cover",
    padding: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      height: "45vh",
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("mobile")]: {
      height: "100%",
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
    [theme.breakpoints.down("mobile")]: {
      display: "flex",
      fontSize: "1rem",
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
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px
  const MQsm = useMediaQuery(theme.breakpoints.down("sm")); //600px
  const MQmb = useMediaQuery(theme.breakpoints.down("mobile")); //400px

  return (
    <Box className={classes.footer}>
      <Grid container xs={12} spacing={3}>
        <Grid item mobile={12} sm={5}>
          <Typography variant={MQmd ? "h6" : "h5"}>The Latest</Typography>
          <Typography
            variant={MQmd ? "caption" : "body2"}
            color="textPrimary"
            gutterBottom
          >
            Stay up to date on the latest Journey merch released and tour dates
            for 2021 + Beyond
          </Typography>
          <form className={classes.form}>
            <Box>
              <TextField name="email" label="Email" size="small" />
            </Box>
            <Box style={{ marginTop: `${MQsm && "1rem"}` }}>
              <Button
                type="submit"
                variant="contained"
                size={MQmd ? "small" : "medium"}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item mobile={12} sm={3}>
          <Typography variant={MQmd ? "h6" : "h5"}>More Info</Typography>
          <Box className={classes.moreinfo}>
            <Box>
              <Button size="small" color="inherit" className={classes.info}>
                Contact
              </Button>
            </Box>
            <Box>
              <Button size="small" color="inherit" className={classes.info}>
                FAQs
              </Button>
            </Box>
            <Box>
              <Button size="small" color="inherit" className={classes.info}>
                Privacy
              </Button>
            </Box>
            <Box>
              <Button size="small" color="inherit" className={classes.info}>
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
          <Typography variant="caption">
            © 2022 Tone&Melody. All Rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
