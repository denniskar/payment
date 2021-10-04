import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MainForm from "./MainForm";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import FxtLayout from "../../../components/FxtLayout/FxtLayout";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    paddingRight: 10,
    paddingLeft: 10,
  },
  svg: {
    verticalAlign: "middle",
  },
  layout: {
    width: "auto",
    marginTop: theme.spacing(-15),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      padding: theme.spacing(3),
    },
  },
}));

const MasterFile = () => {
  const [values, setValues] = useState({});

  const classes = useStyles();
  return (
    <FxtLayout>
      <div className="App">
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <MainForm />
          </Paper>
        </main>
      </div>
    </FxtLayout>
  );
};
export default MasterFile;
