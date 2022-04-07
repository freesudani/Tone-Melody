import React from "react";
import {
  Box,
  Typography,
  Modal,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FrequentlyAskedQuestions } from "../data/faq";

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

export default function FAQModal({ open, handleClose }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" color="textPrimary" align="center">
            Frequently Asked Questions
          </Typography>
          {FrequentlyAskedQuestions.map((question, index) => {
            return (
              <Accordion
                expanded={expanded === `panel${index + 1}`}
                onChange={handleChange(`panel${index + 1}`)}
                key={index}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "90%", flexShrink: 0 }}>
                    {question.Q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{question.A}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
}
