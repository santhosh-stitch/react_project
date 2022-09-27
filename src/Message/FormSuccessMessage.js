import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
// import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: "10px",
    padding: "7px",
    minHeight: "33px",
  },
  background: {
    backgroundColor: "#8af8ca",
  },
  text: {
    fontSize: "14px",
    lineHeight: "17.75px",
  },
}));

const BasicTextField = ({ text }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={(classes.root, text && classes.background)}>
        <Typography align="center" color="success" className={classes.text}>
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default BasicTextField;
