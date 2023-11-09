import { useState } from 'react'
import './App.css'
import ReactHlsPlayer from '@gumlet/react-hls-player'
import IDinput from '../IDinput/IDinput'
import DateTimeInput from '../DateInput/DateInput'

function App() {

  const [livevideoURL, setLiveVideoURL] = useState(localStorage.getItem("livevideoURL") != null ? localStorage.getItem("livevideoURL") : '');
  localStorage.setItem("livevideoURL", livevideoURL);

  const [historyVideoURL, setHistoryVideoURL] = useState(localStorage.getItem("historyvideoURL") != null ? localStorage.getItem("historyvideoURL") : '');
  localStorage.setItem("historyvideoURL", historyVideoURL);

  const start = '2023-11-06T14:40:00-05:00'
  const end = '2023-11-06T14:42:00-05:00'
  
  return (
    <div className="App">

      <div className='inputs'>
          <IDinput setLiveVideoURL={setLiveVideoURL} />

          <DateTimeInput setHistoryVideoURL={setHistoryVideoURL} />

      </div>

      <div className='players'>
      
            <div className='realtime-player player-item'>
              Realtime player by id
              <ReactHlsPlayer
                src={livevideoURL}
                autoPlay={true}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>

            <div className='history-player player-item'>
              History player by id and time
              <ReactHlsPlayer
                src={`http://localhost:8000/streams/development_default_2/history.m3u8?start=${start}&end=${end}`}
                autoPlay={true}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>

      </div>

    </div>
  );
}

export default App;