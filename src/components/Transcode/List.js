import React from "react";
import {TranscodeListItem} from "./List/Item";
import {List} from "@material-ui/core";


export const TranscodeList = ({title, transcodeList}) => {
  const itemList = transcodeList.map(t =>
    <TranscodeListItem key={t.id} transcode={t} />
  )

  return (
    <div>
      <h2>{title}</h2>
      <List>
        {itemList}
      </List>
    </div>
  )
}