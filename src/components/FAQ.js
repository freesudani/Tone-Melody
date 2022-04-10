import React from "react";
import {
  Box,
  Typography,
  Modal,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../redux/modalControl";
import { FrequentlyAskedQuestions } from "../data/faq";
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
    [theme.breakpoints.down("s9")]: {
      width: 350,
    },
  },
}));

export default function FAQModal() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  const MQs9 = useMediaQuery(theme.breakpoints.down("s9")); //360px
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => dispatch(modalActions.handleClose())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.style}>
          <Typography
            variant={MQs9 ? "subtitle1" : "h6"}
            color="textPrimary"
            align="center"
          >
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
                  <Typography
                    sx={{ width: "90%", flexShrink: 0 }}
                    variant={MQs9 ? "body2" : "body1"}
                  >
                    {question.Q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant={MQs9 ? "body2" : "body1"}>
                    {question.A}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
}
