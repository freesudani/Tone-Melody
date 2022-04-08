import React from "react";
import { Box, TextField, Button, Typography, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  style: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 1,
    [theme.breakpoints.down("sm")]: {
      width: 500,
    },
    [theme.breakpoints.down("mobile")]: {
      width: 350,
    },
  },
  form: { display: "flex", flexDirection: "row", justifyContent: "center" },
}));

export default function PDModal({ open, handleClose }) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.style}>
          <Typography
            variant="h6"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Request Personal Data
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            You can request your personal data by filling this form.
          </Typography>
          <form className={classes.form}>
            <Box>
              <TextField name="email" label="Email" size="small" />
            </Box>
            <Box>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
