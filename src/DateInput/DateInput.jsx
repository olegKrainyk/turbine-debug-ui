import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'



export default function DateTimeInput(props){

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  

  const handleTimeChange = (e) => {
        setStartTime(e);
  }

  const setHistoryTimeAndDate = () => {
    props.setHistoryVideoURL(startDate+ ' ' + startTime)
  }

  return (

    <div className='date-input'>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <TimePicker onChange={handleTimeChange} value={startTime} />
        <div onClick={setHistoryTimeAndDate}>show time in console</div>
    </div>
  );
}