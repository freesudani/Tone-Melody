import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import homebg from "../images/blob-haikei.png";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const useStyles = makeStyles((theme) => ({
  about: {
    position: "relative",
    background: `url(${homebg})`,
    height: "100vh",
    backgroundSize: "cover",
    padding: theme.spacing(7),
    paddingTop: theme.spacing(22),
  },
  aboutheader: {
    textTransform: "uppercase",
  },
  aboutdetails: {},
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Typography
        variant="h4"
        color="text"
        className={classes.aboutheader}
        gutterBottom
      >
        About Not & Melody
      </Typography>
      <Box>
        <Box>
          <MusicNoteIcon style={{ verticalAlign: "middle" }} />
          <Typography
            variant="body2"
            color="textPrimary"
            style={{ display: "inline" }}
            gutterBottom
          >
            Note & Melody are available exclusively for special events - such as
            weddings & parties - and some very limited public appearances only.
          </Typography>
        </Box>
        <Box>
          <MusicNoteIcon style={{ verticalAlign: "middle" }} />
          <Typography
            variant="body2"
            color="textPrimary"
            style={{ display: "inline" }}
            gutterBottom
          >
            YOU deserve the best band for your event, and we’ll do everything we
            can to provide the best quality live band at the best possible price
            for YOU. We have a lot of experience in this industry and understand
            the difference between a good band and an inferior one. We only
            recommend live event bands that are capable of delivering a
            performance you’ll long remember.
          </Typography>
        </Box>
        <Box>
          <MusicNoteIcon style={{ verticalAlign: "middle" }} />
          <Typography
            variant="body2"
            color="textPrimary"
            style={{ display: "inline" }}
            gutterBottom
          >
            Whether performing romantic tunes, to nailing Top-40 dance hits like
            few can, people who appreciate truly great music , QUALITY singing,
            and a FUN energetic party inspiring performance - REALLY appreciate
            the "Tone & Melody".
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
