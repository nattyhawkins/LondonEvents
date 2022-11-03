import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const Calendar = () => {

  const [ selectedDate, setSelectedDate ] = useState(null)

  return (
    <ReactDatePicker 
      selected={selectedDate} 
      onChange={date => setSelectedDate(date)}
      dateFormat='dd/MM/yyyy'  
      minDate={new Date()}
    />
  )
}

export default Calendar