import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { motion } from "framer-motion";
import { moveLeftVariants } from "../animations/motion-variants";
import { RnBHipHop, Rock, Country } from "../data/musiclist";
import imgWalking from "../images/walking_prev_ui.png";
import homebg from "../images/blob-haikei.png";
import Slider from "react-perfect-slider";

const useStyles = makeStyles((theme) => ({
  music: {
    position: "relative",
    background: `url(${homebg})`,
    height: "100vh",

    backgroundSize: "cover",
    padding: theme.spacing(3),
    paddingTop: theme.spacing(20),
  },

  button1: {
    marginLeft: theme.spacing(62),
  },

  slide: {
    width: "80vw",
    height: "25rem",
  },

  slideheader: {
    textAlign: "center",
  },

  slideheadertext: {
    textTransform: "uppercase",
  },

  song: {
    border: "1px solid #000",
    margin: theme.spacing(1),
    height: "6.5rem",
    borderRadius: theme.shape.borderRadius,
  },

  songtext: {
    textTransform: "capitalize",
  },

  walkingbox: {
    position: "absloute",
    marginTop: theme.spacing(-48),
    marginLeft: theme.spacing(105),
  },
  walking: {
    height: "auto",
    maxWidth: "560rem",
    zIndex: "1",
  },
}));

const Music = () => {
  const classes = useStyles();
  return (
    <Box className={classes.music}>
      <Slider
        className={classes.slider}
        autoplay={false}
        renderControls={(next, previous) => [
          <Button
            onClick={previous}
            style={{ color: "#000", marginLeft: "2.6rem" }}
            startIcon={<SkipPreviousIcon />}
          >
            Previous
          </Button>,
          <Button
            onClick={next}
            style={{ color: "#000", marginLeft: "1.5rem" }}
            endIcon={<SkipNextIcon />}
          >
            Next
          </Button>,
        ]}
      >
        <Box className={classes.slide}>
          <Box className={classes.slideheader}>
            <Typography gutterBottom className={classes.slideheadertext}>
              Country
            </Typography>
          </Box>
          <Grid
            container
            xs={12}
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            {Country.map((song, index) => {
              return (
                <Grid item xs={2} key={index} className={classes.song}>
                  <Typography variant="song" className={classes.songtext}>
                    {song}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box className={classes.slide}>
          <Box className={classes.slideheader}>
            <Typography gutterBottom className={classes.slideheadertext}>
              Rock
            </Typography>
          </Box>
          <Grid
            container
            xs={12}
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            {Rock.map((song, index) => {
              return (
                <Grid item xs={2} key={index} className={classes.song}>
                  <Typography variant="song" className={classes.songtext}>
                    {song}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box className={classes.slide}>
          <Box className={classes.slideheader}>
            <Typography gutterBottom className={classes.slideheadertext}>
              R&B/Hiphop
            </Typography>
          </Box>
          <Grid
            container
            xs={12}
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            {RnBHipHop.map((song, index) => {
              return (
                <Grid item xs={2} key={index} className={classes.song}>
                  <Typography variant="song" className={classes.songtext}>
                    {song}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Slider>
      <Box
        component={motion.div}
        variants={moveLeftVariants}
        initial="hidden"
        animate="visible"
        className={classes.walkingbox}
      >
        <img src={imgWalking} alt="walking" className={classes.walking} />
      </Box>
    </Box>
  );
};

export default Music;
