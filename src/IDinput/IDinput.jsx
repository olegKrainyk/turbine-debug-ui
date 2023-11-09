import { useState } from 'react'
import axios from 'axios'
import './IDinput.css'

export default function IDinput(props){

  const [livevideoID, setLiveVideoID] = useState(localStorage.getItem("livevideoID") != null ? localStorage.getItem("livevideoID") : '');
  localStorage.setItem("livevideoID", livevideoID);

  const handleIdChange = (e) => {
    setLiveVideoID(e.target.value);
  }

  const getUrlById = () => {
    axios.get(`http://localhost:8000/streams/${livevideoID}/live.m3u8`)
        .then(response => {
            props.setLiveVideoURL(`http://localhost:8000/streams/${livevideoID}/live.m3u8`);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }


  return (

    <div className='id-input-block'>
        <input value={livevideoID} onChange={handleIdChange}></input>
        <div className='getURLbtn' onClick={getUrlById}>change video</div>
    </div>
  );
}