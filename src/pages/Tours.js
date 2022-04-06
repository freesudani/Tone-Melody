import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import { moverighttVariants } from "../animations/motion-variants";
import DateObject from "react-date-object";
import { useTheme, useMediaQuery } from "@mui/material";
import micImage from "../images/matt-botsford-OKLqGsCT8qs-unsplash_prev_ui.png";
import homebg from "../images/blob-haikei.png";

const useStyles = makeStyles((theme) => ({
  tour: {
    position: "relative",
    background: `url(${homebg})`,
    height: "100vh",
    backgroundSize: "cover",
    padding: theme.spacing(3),
    [theme.breakpoints.down("s9")]: {
      height: "80vh",
    },
  },

  tablecontainer: {
    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(50),
    maxWidth: 900,
    height: 450,
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(15),
      marginLeft: theme.spacing(30),
      maxWidth: 600,
      height: 350,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(18),
      marginLeft: theme.spacing(0),
      maxWidth: 550,
      height: 300,
    },
  },

  cell: {
    "&.MuiTableCell-sizeSmall": {
      fontSize: "1rem",
    },
  },

  micbox: {
    position: "absloute",
    marginTop: theme.spacing(-46.8),
    marginLeft: theme.spacing(-40),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(-33.9),
      marginLeft: theme.spacing(-35),
    },
  },

  mic: {
    maxWidth: "45rem",
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "35rem",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const createData = (name, address, date) => {
  return { name, address, date };
};

const rows = [
  createData(
    "Willing Festival",
    "Down 10St Block #9",
    `${new DateObject("2022 4 21 11 55 am").format("DD/MM/YYYY hh:mm")}`
  ),
  createData(
    "Willing Festival",
    "Down 10St Block #9",
    `${new DateObject("2022 4 26 13 30 ").format("DD/MM/YYYY hh:mm")}`
  ),

  createData(
    "Willing Festival",
    "Down 10St Block #9",
    `${new DateObject("2022 5 04 17 30 ").format("DD/MM/YYYY hh:mm")}`
  ),

  createData(
    "Willing Festival",
    "Down 10St Block #9",
    `${new DateObject("2022 5 13 19 45 ").format("DD/MM/YYYY hh:mm")}`
  ),

  createData(
    "Willing Festival",
    "Down 10St Block #9",
    `${new DateObject("2022 5 29 20 45 ").format("DD/MM/YYYY hh:mm")}`
  ),
  createData(
    "Willing Festival",
    "Down 10St Block #9",
    `${new DateObject("2022 6 03 20 00 ").format("DD/MM/YYYY hh:mm")}`
  ),
];

const Tours = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px

  return (
    <Box className={classes.tour}>
      <TableContainer component={Paper} className={classes.tablecontainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell size={MQmd && "small"} className={classes.cell}>
                Events Name
              </TableCell>
              <TableCell
                align="center"
                size={MQmd && "small"}
                className={classes.cell}
              >
                Address
              </TableCell>
              <TableCell
                align="center"
                size={MQmd && "small"}
                className={classes.cell}
              >
                Date/Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  size={MQmd && "small"}
                  className={classes.cell}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="center"
                  size={MQmd && "small"}
                  className={classes.cell}
                >
                  {row.address}
                </TableCell>
                <TableCell
                  align="center"
                  size={MQmd && "small"}
                  className={classes.cell}
                >
                  {row.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        component={motion.div}
        variants={moverighttVariants}
        initial="hidden"
        animate="visible"
        className={classes.micbox}
      >
        <img src={micImage} alt="mic" className={classes.mic} />
      </Box>
    </Box>
  );
};

export default Tours;
