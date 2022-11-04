import ReactDatePicker from 'react-datepicker'

const FiltersLucky = ({ eventCode, setEventCode, selectedDate, setSelectedDate, setMinDate, setMaxDate, selectValue, setSelectValue }) => {
  const eventTypes = [ 
    { '': 'All'},
    { '&eventcode=FEST': 'Festivals' },
    { '&eventcode=LIVE': 'Live music' },
    { '&eventcode=CLUB': 'Clubbing/Dance music' },
    { '&eventcode=DATE': 'Dating event' },
    { '&eventcode=THEATRE': 'Theatre/Dance' },
    { '&eventcode=COMEDY': 'Comedy' },
    { '&eventcode=EXHIB': 'Exhibitions and Attractions' },
    { '&eventcode=KIDS': 'Kids/Family event' },
    { '&eventcode=BARPUB': 'Bar/Pub event' },
    { '&eventcode=LGB': 'Gay/Lesbian event' },
    { '&eventcode=SPORT': 'Sporting event' },
    { '&eventcode=ARTS': 'The Arts' },
  ]
  
  // const [ selectValue, setSelectValue ] = useState('All')

  const typeChange = (e) => {
    setEventCode(e.target.value)
    console.log(eventCode)
    setSelectValue(e.target)
    console.log(e.target)
  }

  const dateChange = (date) => {
    setSelectedDate(date)
    const minDateFormat = `&minDate=${date.toISOString().split('T')[0]}`
    const maxDateFormat = `&maxDate=${date.toISOString().split('T')[0]}`
    setMinDate(minDateFormat)
    setMaxDate(maxDateFormat)
    console.log(minDateFormat, maxDateFormat)
  }


  return (
    <div className='filters-left'>
      {/* <Col className="filter-col mb-4 col-8 offset-2 col-sm-6 offset-sm-0 col-md-4 offset-md-0 col-lg-3 offset-lg-0"> */}
      <div className="type-container">
        <label htmlFor="selectEventType">Type</label>
        <select className="filter-input" onChange={typeChange} value={selectValue} name="selectEventType">
          {eventTypes.map(type => <option key={Object.keys(type)} value={Object.keys(type)} id={Object.values(type)}>{Object.values(type)}</option>)}
        </select>
      </div>
      <div className="date-container">
        <label htmlFor="calendar">Date</label>
        <ReactDatePicker 
          name="calendar"
          selected={selectedDate} 
          onChange={dateChange}
          dateFormat='dd/MM/yyyy'  
          minDate={new Date()}
          className="filter-input"
        />
      </div>
    </div>
    
  )
}
export default FiltersLucky