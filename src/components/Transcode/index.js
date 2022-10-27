import React, {useEffect, useState} from "react";
// import transcodes from "../../util/pusher";
import {TranscodeList} from "./List";

export const Transcode = () => {
  const [transcodeList, setTranscodeList] = useState([{id: 2, name: "hello world", size: 10, progress: 30}])
  const [completedTranscodeList, setCompletedTranscodeList] = useState([])

  const [mockData, setMockData] = useState({id: 1, name: "hello world", size: 10, progress: 0})

  useEffect(() => {
    // Mocking transcode data
    const data = {...mockData }

    // transcodes.bind('progress', (data) => {
      if (data.progress === 100) {
        setCompletedTranscodeList([...completedTranscodeList, data])

        setTranscodeList(transcodeList.filter(x => x.id !== data.id))
      }

      const existTranscode = transcodeList.find(x => x.id === data.id)
      if (!existTranscode) {
        setTranscodeList([...transcodeList, data])
      } else {
        existTranscode.progress = data.progress
      }
    // })

    // Mock data progress update
    if (data.progress >= 100) return
    setTimeout(() => {
      setMockData({...mockData, progress: ++mockData.progress})
    }, 100);
  }, [mockData])

  return (
    <div style={{width: "800px", margin: "auto"}}>
      <h1>Transcodes {mockData.progress}</h1>
      <TranscodeList title="In progress" transcodeList={transcodeList} />
      <TranscodeList title="Completed" transcodeList={completedTranscodeList} />
    </div>
  )
}