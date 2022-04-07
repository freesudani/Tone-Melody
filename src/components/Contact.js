import React from "react";
import { Box, TextField, Button, Typography, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 1,
};

const useStyles = makeStyles((theme) => ({
  form: { display: "flex", flexDirection: "column" },
  inputRoot: {
    fontSize: 15,
  },
  inputhieght: {
    height: 130,
    fontSize: 15,
  },
  labelRoot: {
    fontSize: 15,
  },
  labelFocused: {},
}));

export default function ContactModal({ open, handleClose }) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            Contact
          </Typography>
          <form className={classes.form}>
            <Box>
              <TextField
                name="name"
                label="Your Name"
                size="medium"
                sx={{ width: "60%", p: 1 }}
                InputProps={{ classes: { root: classes.inputRoot } }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
                }}
              />
            </Box>
            <Box>
              <TextField
                name="email"
                label="Your Email"
                size="medium"
                sx={{ width: "60%", p: 1 }}
                InputProps={{ classes: { root: classes.inputRoot } }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
                }}
              />
            </Box>
            <Box>
              <TextField
                name="phone"
                label="Your Phone"
                size="medium"
                fullWidth
                sx={{ width: "60%", p: 1 }}
                InputProps={{ classes: { root: classes.inputRoot } }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
                }}
              />
            </Box>
            <Box className={classes.text}>
              <TextField
                variant="outlined"
                name="comment"
                label="Your Comment"
                size="medium"
                fullWidth
                sx={{ width: "100%", p: 1 }}
                InputProps={{ classes: { root: classes.inputhieght } }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
                }}
              />
            </Box>
            <Box sx={{ p: 1.5 }}>
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
