import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { motion } from "framer-motion";
import { zoomoutVariants } from "../animations/motion-variants";
import homebg from "../images/blob-haikei.png";

const useStyles = makeStyles((theme) => ({
  about: {
    position: "relative",
    background: `url(${homebg})`,
    height: "100vh",
    backgroundSize: "cover",
    padding: theme.spacing(7),
    paddingTop: theme.spacing(22),
    [theme.breakpoints.down("s9")]: {
      height: "80vh",
    },
  },
  aboutheader: {
    textTransform: "uppercase",
  },
  aboutdetails: {},
}));

const AboutUs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQmb = useMediaQuery(theme.breakpoints.down("mobile")); //400px

  return (
    <Box className={classes.about}>
      <Typography
        variant={MQmb ? "h6" : "h4"}
        color="text"
        className={classes.aboutheader}
        gutterBottom
      >
        About Not & Melody
      </Typography>
      <Box>
        <Box>
          <MusicNoteIcon style={{ verticalAlign: "middle" }} fontSize="small" />
          <Typography
            variant="body2"
            color="textPrimary"
            style={{ display: "inline" }}
            gutterBottom
            component={motion.div}
            variants={zoomoutVariants}
            initial="hidden"
            animate="visible"
          >
            Note & Melody are available exclusively for special events - such as
            weddings & parties - and some very limited public appearances only.
          </Typography>
        </Box>
        {!MQmb && (
          <Box>
            <MusicNoteIcon
              style={{ verticalAlign: "middle" }}
              fontSize="small"
            />
            <Typography
              variant={MQmb ? "caption" : "body2"}
              color="textPrimary"
              style={{ display: "inline" }}
              gutterBottom
              component={motion.div}
              variants={zoomoutVariants}
              initial="hidden"
              animate="visible"
            >
              YOU deserve the best band for your event, and we’ll do everything
              we can to provide the best quality live band at the best possible
              price for YOU. We have a lot of experience in this industry and
              understand the difference between a good band and an inferior one.
              We only recommend live event bands that are capable of delivering
              a performance you’ll long remember.
            </Typography>
          </Box>
        )}
        {!MQmb && (
          <Box>
            <MusicNoteIcon
              style={{ verticalAlign: "middle" }}
              fontSize="small"
            />

            <Typography
              variant="body2"
              color="textPrimary"
              style={{ display: "inline" }}
              gutterBottom
              component={motion.div}
              variants={zoomoutVariants}
              initial="hidden"
              animate="visible"
            >
              Whether performing romantic tunes, to nailing Top-40 dance hits
              like few can, people who appreciate truly great music , QUALITY
              singing, and a FUN energetic party inspiring performance - REALLY
              appreciate the "Tone & Melody".
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AboutUs;
