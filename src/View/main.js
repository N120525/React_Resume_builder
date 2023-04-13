import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Form from "./Form/index.js";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textDecoration: 'underline',
    color: 'gray',
    textAlign:'center'
  }
}));

const MainPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="none">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Resume Builder
          </Typography>
        </Toolbar>
      </AppBar>
      <Form />
    </div>
  );
};


export default MainPage;
