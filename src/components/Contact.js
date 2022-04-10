import React from "react";
import { Box, TextField, Button, Typography, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../redux/modalControl";

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

  textfield: {
    width: "60%",
    padding: 10,
    [theme.breakpoints.down("mobile")]: {
      width: "95%",
      padding: "0.5rem",
    },
  },

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
}));

export default function ContactModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open3);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => dispatch(modalActions.handleClose3())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.style}>
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
                className={classes.textfield}
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
                className={classes.textfield}
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
                className={classes.textfield}
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
