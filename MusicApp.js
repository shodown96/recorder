
import React, { useState } from 'react'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import axios from 'axios'
//  yarn add audio-react-recorder axios
function App() {

  const [recording, setRecording] = useState(RecordState.STOP)
  const [count, setCount] = useState(0)

  const onStop = (audioData) => {
    console.log('audioData', audioData)
    const data = new FormData();
    data.append("audio", audioData.blob, `audio${count}.wav`)
    data.append("name", `NewFile${count}`)
    setCount(count + 1)
    axios.post("http://127.0.0.1:8000/music/", data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(({ data }) => console.log(data))
      .catch(e => console.log(e))

  }
// You'll have to restrructure it better sha
  return (
    <div>
      <AudioReactRecorder state={recording} onStop={onStop} />

      <button onClick={() => setRecording(RecordState.START)}>Start</button>
      <button onClick={() => setRecording(RecordState.STOP)}>Stop</button>
    </div>
  )
}

export default App