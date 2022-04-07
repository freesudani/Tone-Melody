import React from "react";
import { Box, Typography, Modal } from "@mui/material";

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

export default function PrivacyModal({ open, handleClose }) {
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
            PRIVACY POLICY
          </Typography>
          <Typography variant="body1" color="textPrimary" align="left">
            Effective: June 28, 2019.
          </Typography>
          <Typography variant="body2" color="textPrimary" align="justify">
            Information We May Collect From You
            <br /> When you use the Site or contact us by e-mail, social media,
            SMS, telephone, or other methods, we may collect and process the
            following data about you: Information You Give Us, Including:
            <br /> Forms filled out by you on the Site <br /> Content of
            correspondence with us by phone, e-mail or otherwise <br />
            Site registration <br />
            Subscriptions or orders placed on the Site <br /> Mailing address
            and payment information from orders placed by you on the Site or
            Webstore <br />
            Participation in discussion boards or other social media functions
            on the Site
            <br /> Reporting a problem or requesting support for the Site <br />
            The information you give us may include your name, address, e-mail
            address and phone number, date of birth, payment information,
            personal description, photographs or images or comments.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
