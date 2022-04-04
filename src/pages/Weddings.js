import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WeddingtoneIcon from "../components/weddingtoneIcon";
import { motion } from "framer-motion";
import { zoomoutVariants } from "../animations/motion-variants";
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
  },

  weddingimg: {
    height: "100%",
    width: "100%",
    maxWidth: "25rem",
    maxHeight: "13rem",
    marginLeft: theme.spacing(14),
  },
}));

const Weddings = () => {
  const classes = useStyles();
  return (
    <Box className={classes.weddings}>
      <Grid
        container
        xs={12}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <Box style={{ float: "left" }}>
            <WeddingtoneIcon />
          </Box>
          <Typography
            variant="body2"
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
            variant="body2"
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
