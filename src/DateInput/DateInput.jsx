import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'



export default function DateTimeInput(props){

  let newDate = new Date()

  const [startDate, setStartDate] = useState(newDate);
  const [startTime, setStartTime] = useState(`${newDate.getHours()}:00`);
  const [endDate, setEndDate] = useState(newDate);
  const [endTime, setEndTime] = useState(`${newDate.getHours()}:01`);
  

  const handleTimeChange = (time) => {
        setStartTime(time);
        console.log(time);
  }

  const handleTimeChangeEnd = (time) => {
      setEndTime(time);
  }


  const setHistoryTimeAndDate = () => {
    // 'T'+startTime+':00-5:00'
    let historyDate = getDateForURL();
    console.log(historyDate);
    props.setHistoryVideoURL(`http://localhost:8000/streams/${localStorage.getItem("livevideoID")}/history.m3u8?start=${historyDate[0]}&end=${historyDate[1]}`);
    
  }

  const handleDateChange = (date, setDate) => {
    setDate(new Date(date));
  }

  const getDateForURL = () => {
    let dateTime = [`${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}T${startTime}:00-5:00`, `${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}T${endTime}:00-5:00`];
    return dateTime;
  }

  return (

    <div className='date-input'>
        <div> 
          <DatePicker selected={startDate} onChange={(date) => handleDateChange(date, setStartDate)}/>
          <TimePicker onChange={handleTimeChange} value={startTime} />
        </div>

        <div>
          <DatePicker selected={endDate} onChange={(date) => handleDateChange(date, setEndDate)}/>
          <TimePicker onChange={handleTimeChangeEnd} value={endTime} />
        </div>

        <div onClick={setHistoryTimeAndDate}>Change Time for History Player</div>
    </div>
  );
}