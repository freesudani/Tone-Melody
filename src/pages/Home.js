import React from "react";
import NoteIcon from "../components/noteIcon";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { motion } from "framer-motion";
import { moverighttVariants } from "../animations/motion-variants";
import homebg from "../images/blob-haikei.png";
import Guitarplayer from "../images/imageedit_1_5292774868.png";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    background: `url(${homebg})`,
    height: "100vh",
    backgroundSize: "cover",
    padding: theme.spacing(3),
    [theme.breakpoints.down("s9")]: {
      height: "100vh",
    },
  },

  musicnote: {
    position: "absloute",
    marginLeft: theme.spacing(135),
    marginTop: theme.spacing(15),
  },
  textbox: {
    position: "absolute",
    width: "45vw",
    marginTop: theme.spacing(22),
    marginLeft: theme.spacing(3),
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(18),
    },
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
      textAlign: "center",
      marginLeft: theme.spacing(0),
    },
  },

  text2: {
    textTransform: "capitalize",
  },

  button: {
    marginTop: theme.spacing(2),
  },
  playerbox: {
    position: "absolute",
    bottom: theme.spacing(-1.7),
    right: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      right: theme.spacing(-5),
      bottom: theme.spacing(-1.4),
    },
  },
  guitarplayer: {
    width: "100%",
    maxWidth: "40rem",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQmb = useMediaQuery(theme.breakpoints.down("mobile")); //600px
  return (
    <Box className={classes.header}>
      <Box className={classes.textbox}>
        <Typography gutterBottom>You Can Have It All</Typography>
        <Typography variant="h5" className={classes.text2} gutterBottom>
          award winning Bangkok wedding band and live entertainment
        </Typography>
        <Typography variant="body2" color="primary" gutterBottom>
          Your Event Needs a POWERFUL Band. Professionalism, High Energy Stage,
          Soulful Sounds and Fun!
        </Typography>
        <Button
          variant="contained"
          size={MQmb ? "medium" : "large"}
          className={classes.button}
          endIcon={<MusicNoteIcon />}
        >
          Book an Event
        </Button>
      </Box>
      <Box
        component={motion.div}
        variants={moverighttVariants}
        initial="hidden"
        animate="visible"
        className={classes.playerbox}
      >
        <img src={Guitarplayer} alt="Guitar" className={classes.guitarplayer} />
      </Box>
      <Box className={classes.musicnote}>
        <NoteIcon />
      </Box>
    </Box>
  );
};

export default Home;
