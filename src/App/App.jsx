import { useState } from 'react';
import './App.css'
import ReactHlsPlayer from '@gumlet/react-hls-player'
import IDinput from '../IDinput/IDinput';

function App() {

  const [videoURL, setVideoURL] = useState(localStorage.getItem("videoURL") != null ? localStorage.getItem("videoURL") : '');
  localStorage.setItem("videoURL", videoURL);
  
  return (
    <div className="App">

      <div className='info'>
          <IDinput setVideoURL={setVideoURL} />
      </div>
      
      <div className='player'>
        <ReactHlsPlayer
          src={videoURL}
          autoPlay={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>

      <div className='player'>
        <ReactHlsPlayer
          src={'http://localhost:8000/streams/development_default_2/history.m3u8?start=2023-11-06T14%3A40%3A00-05%3A00&end=2023-11-06T14%3A45%3A00-05%3A00'}
          autoPlay={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>

    </div>
  );
}

export default App;