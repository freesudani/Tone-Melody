import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
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
    [theme.breakpoints.down("lg")]: {
      height: "170vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "140vh",
    },
    [theme.breakpoints.down("mobile")]: {
      height: "180vh",
    },
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
  const theme = useTheme();
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1200px
  const MQsm = useMediaQuery(theme.breakpoints.down("sm")); //600px
  const MQmb = useMediaQuery(theme.breakpoints.down("mobile")); //400px
  return (
    <Box className={classes.testimonials}>
      <Typography
        variant={MQsm ? "h4" : MQlg ? "h3" : "h2"}
        align="center"
        className={classes.testimonialheader}
        gutterBottom
      >
        Customer Testimonials
      </Typography>
      <Paper
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariants}
        className={classes.testimonial}
      >
        <Grid container xs={12} spacing={MQsm ? 3 : 5} justifyContent="center">
          <Grid item xs={10}>
            <Typography
              variant={MQmb ? "caption" : MQsm ? "body2" : "body1"}
              color="textPrimary"
            >
              Just wanted to let you know how happy we were with the band that
              played at our reception. Everyone had a great time and was up and
              dancing – my father-in-law even got up and played air guitar.
              Thanks for everything!
            </Typography>
            <Typography
              variant={MQmb ? "subtitle2" : MQsm ? "subtitle1" : "h6"}
              color="textPrimary"
            >
              Zoey Myers
            </Typography>
            <Typography
              variant={MQmb ? "subtitle2" : MQsm ? "subtitle1" : "h6"}
              color="primary"
            >
              Event Organizer
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <img
                src={ImgPic1}
                alt="pic1"
                style={{ width: `${MQmb ? "3rem" : MQsm ? "5rem" : "auto"}` }}
              />
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
        <Grid container xs={12} spacing={MQsm ? 3 : 5} justifyContent="center">
          <Grid item xs={10}>
            <Typography
              variant={MQmb ? "caption" : MQsm ? "body2" : "body1"}
              color="textPrimary"
            >
              Just wanted to say a HUGE thank you to you guys. It was PERFECT –
              the songs were great, the volume was spot-on and you were
              extremely professional. You were lovely guys, too! It all came
              together and everyone commented on how great the music was!
            </Typography>
            <Typography
              variant={MQmb ? "subtitle2" : MQsm ? "subtitle1" : "h6"}
              color="textPrimary"
            >
              Alexander Steward
            </Typography>
            <Typography
              variant={MQmb ? "subtitle2" : MQsm ? "subtitle1" : "h6"}
              color="primary"
            >
              Accountant
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <img
                src={ImgPic2}
                alt="pic1"
                style={{ width: `${MQmb ? "3rem" : MQsm ? "5rem" : "auto"}` }}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Testimonials;
