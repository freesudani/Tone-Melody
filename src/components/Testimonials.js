import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import { scrollVariants } from "../animations/motion-variants";
import ImgPic2 from "../images/85.jpg";
import ImgPic1 from "../images/88.jpg";
import testimonialbg from "../images/diego-sulivan-iDa5Mf7GqRg-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  testimonials: {
    height: "140vh",
    background: `url(${testimonialbg})`,
    backgroundSize: "cover",
    padding: theme.spacing(3),
  },

  testimonialheader: {
    textTransform: "captalize",
    color: theme.palette.grey[50],
  },
  testimonial: {
    maxWidth: "60rem",
    width: "100%",
    height: "auto",
    padding: theme.spacing(3),
    margin: theme.spacing(3, "auto"),
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <Box className={classes.testimonials}>
      <h1 align="center" className={classes.testimonialheader} gutterBottom>
        Customer Testimonials
      </h1>
      <Paper
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariants}
        className={classes.testimonial}
      >
        <Grid container xs={12} spacing={5} justifyContent="center">
          <Grid item xs={10}>
            <Typography variant="body1" color="textPrimary">
              Just wanted to let you know how happy we were with the band that
              played at our reception. Everyone had a great time and was up and
              dancing – my father-in-law even got up and played air guitar.
              Thanks for everything!
            </Typography>
            <Typography variant="h6" color="textPrimary">
              Zoey Myers
            </Typography>
            <Typography variant="h6" color="primary">
              Event Organizer
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <img src={ImgPic1} alt="pic1" />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariants}
        className={classes.testimonial}
      >
        <Grid container xs={12} spacing={5} justifyContent="center">
          <Grid item xs={10}>
            <Typography variant="body1" color="textPrimary">
              Just wanted to say a HUGE thank you to you guys. It was PERFECT –
              the songs were great, the volume was spot-on and you were
              extremely professional. You were lovely guys, too! It all came
              together and everyone commented on how great the music was!
            </Typography>
            <Typography variant="h6" color="textPrimary">
              Alexander Steward
            </Typography>
            <Typography variant="h6" color="primary">
              Accountant
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <img src={ImgPic2} alt="pic1" />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Testimonials;
