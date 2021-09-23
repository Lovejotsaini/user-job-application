import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  typographyStyles: {
    color: "#fff",
    marginLeft: "20px",
    fontSize: "1.4rem",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <Typography className={classes.typographyStyles}>Home</Typography>
        </Link>{" "}
        <Link to="job-form">
          {" "}
          <Typography className={classes.typographyStyles}>Job Form</Typography>
        </Link>{" "}
        <Link to="dashboard">
          {" "}
          <Typography className={classes.typographyStyles}>
            Dashboard
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
