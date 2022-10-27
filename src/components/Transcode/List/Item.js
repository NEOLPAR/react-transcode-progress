import React from "react";
import {LinearProgress, ListItem, ListItemText, makeStyles, colors} from "@material-ui/core";

const randomMaterialUIColor = () => {
  const MATERIAL_COLOR_LIST = Object.keys(colors).filter(x => x !== "common")

  return colors[MATERIAL_COLOR_LIST[Math.floor(Math.random() * 10) + 1]]
}

const useStyles = makeStyles({
  listItem: {
    backgroundColor: "white",
    marginBottom: "10px"
  },
  listItemLabel: {
    marginRight: "20px",
    flex: "0 0 auto"
  },
  linearProgressRoot: {
    width: '100%',
    height: 20,
    borderRadius: 10,
    flexGrow: 1
  },
  colorPrimary: {
    backgroundColor: colors.grey["200"],
  },
  bar: {
    borderRadius: 10,
    background: (progress) => {
      if (progress === 100) return colors.grey["700"]

      const randomColor = randomMaterialUIColor()
      let lightColor = randomColor["200"]
      let darkColor = randomColor["700"]

      return `repeating-linear-gradient(
        -60deg,
        ${lightColor},
        ${lightColor} 10px,
        ${darkColor} 10px,
        ${darkColor} 20px
      )`
    },
    animation: `$move 1s linear infinite`
  },
  "@keyframes move": {
    "0%": {
      backgroundPosition: "0"
    },
    "100%": {
      backgroundPosition: "22px"
    }
  },
});

export const TranscodeListItem = ({transcode}) => {
  const {name, size, progress} = transcode
  const classes = useStyles(progress);

  return (
    <ListItem className={classes.listItem}>
      <ListItemText className={classes.listItemLabel} primary={name} secondary={size}/>
      <LinearProgress
        classes={{root: classes.linearProgressRoot, bar: classes.bar, colorPrimary: classes.colorPrimary}}
        variant="determinate"
        value={progress}
      />
    </ListItem>
  )
}