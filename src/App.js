import React from "react";
import "./App.css";
import {Transcode} from "./components/Transcode";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.grey["200"]
  }
}))

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      <Transcode />
    </div>
  )
}