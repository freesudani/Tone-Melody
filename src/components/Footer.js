import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from "@mui/icons-material/Apple";
import imgLogo from "../images/36ad5d7c035c4b129512b898e11cb9b0.png";
import footerbg from "../images/blob-haikei (1).png";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    background: `url(${footerbg})`,
    height: "60vh",
    backgroundSize: "cover",
    padding: theme.spacing(6),
  },

  form: {
    display: "flex",
  },

  moreinfo: {
    color: theme.palette.text.primary,
  },

  logo: {
    marginLeft: theme.spacing(5),
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
  return (
    <Box className={classes.footer}>
      <Grid container xs={12} spacing={3}>
        <Grid item xs={5}>
          <Typography variant="h5">The Latest</Typography>
          <Typography variant="body2" color="textPrimary" gutterBottom>
            Stay up to date on the latest Journey merch released and tour dates
            for 2021 + Beyond
          </Typography>
          <form className={classes.form}>
            <div>
              <TextField name="email" label="Email" size="small" />
            </div>
            <div>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">More Info</Typography>
          <Box>
            <Button size="small" color="inherit">
              Contact
            </Button>
          </Box>
          <Box>
            <Button size="small" color="inherit">
              FAQs
            </Button>
          </Box>
          <Box>
            <Button size="small" color="inherit">
              Privacy
            </Button>
          </Box>
          <Box>
            <Button size="small" color="inherit">
              You Data
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            disableRipple
            className={classes.logo}
          >
            <img src={imgLogo} alt="Logo" className={classes.logo} />
          </IconButton>

          <Box className={classes.socialmedia}>
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
          <Typography variant="caption">
            © 2022 Tone&Melody. All Rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
