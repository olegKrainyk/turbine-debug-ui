import { useState } from 'react'
import axios from 'axios'

export default function IDinput(props){

  const [videoID, setVideoID] = useState(localStorage.getItem("videoID") != null ? localStorage.getItem("videoID") : '');
  localStorage.setItem("videoID", videoID);

  const handleIdChange = (e) => {
    setVideoID(e.target.value);
  }

  const getUrlById = () => {
    axios.get(`http://localhost:8000/streams/${videoID}/live.m3u8`)
        .then(response => {
            props.setVideoURL(`http://localhost:8000/streams/${videoID}/live.m3u8`);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }


  return (

    <>
        <input value={videoID} onChange={handleIdChange}></input>
        <div className='getURLbtn' onClick={getUrlById}>change video</div>
    </>
  );
}