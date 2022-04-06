import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WeddingtoneIcon from "../components/weddingtoneIcon";
import { motion } from "framer-motion";
import { zoomoutVariants } from "../animations/motion-variants";
import { useTheme, useMediaQuery } from "@mui/material";
import homebg from "../images/blob-haikei.png";
import weddingImage1 from "../images/andy-lee-FuDKEwFLsQU-unsplash.jpg";
import weddingImage2 from "../images/mitchell-orr---LyFIjXoFY-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  weddings: {
    position: "relative",
    background: `url(${homebg})`,
    height: "100vh",
    backgroundSize: "cover",
    padding: theme.spacing(3),
    paddingTop: theme.spacing(22),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(20),
    },
    [theme.breakpoints.down("mobile")]: {
      paddingTop: theme.spacing(15),
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("s9")]: {
      height: "80vh",
    },
  },

  weddingimg: {
    height: "100%",
    width: "100%",
    maxWidth: "25rem",
    maxHeight: "13rem",
    marginLeft: theme.spacing(14),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Weddings = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px
  const MQmb = useMediaQuery(theme.breakpoints.down("mobile")); //400px

  return (
    <Box className={classes.weddings}>
      <Grid
        container
        xs={12}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={0} md={6}>
          <img
            src={weddingImage1}
            alt="wedding1"
            className={classes.weddingimg}
          />
          <img
            src={weddingImage2}
            alt="wedding2"
            className={classes.weddingimg}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {!MQmb && (
            <Box style={{ float: "left" }}>
              <WeddingtoneIcon />
            </Box>
          )}
          <Typography
            variant={MQmb ? "caption" : MQmd ? "OVERLINE" : "body2"}
            color="textPrimary"
            component={motion.div}
            variants={zoomoutVariants}
            initial="hidden"
            animate="visible"
          >
            Note & Melody Band has performed over 3,500 weddings in the past 25
            years all over the city. From First Dance to the unique sendoff, we
            know how to celebrate the most important day of your life! We
            entertain your guests from dinner music to high energy dance music
            later in the night.
          </Typography>
          <Typography
            variant={MQmb ? "caption" : MQmd ? "OVERLINE" : "body2"}
            color="textPrimary"
            component={motion.div}
            variants={zoomoutVariants}
            initial="hidden"
            animate="visible"
          >
            find it very easy working with our talented support staff as each
            detail of the wedding reception is worked through. From song
            requests to the timing of each phase of the reception, Note & Melody
            Band has the experience and talent to make it happen.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Weddings;
