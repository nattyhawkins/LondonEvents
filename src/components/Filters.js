import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker'

const Filters = ({ eventCode, setEventCode, checked, setChecked, search, setSearch, selectedDate, setSelectedDate, setMinDate, setMaxDate, setForSale }) => {
  let input = ''
  const eventTypes = [ 
    { '': 'All'},
    { '&eventcode=FEST': 'Festivals' },
    { '&eventcode=LIVE': 'Live music' },
    { '&eventcode=CLUB': 'Clubbing/Dance music' },
    { '&eventcode=DATE': 'Dating event' },
    { '&eventcode=THEATRE': 'Theatre/Dance' },
    { '&eventcode=COMEDY': 'Comedy' },
    { '&eventcode=EXHIB': 'Exhibitions and Attractions' },
    {'&eventcode=KIDS': 'Kids/Family event' },
    { '&eventcode=BARPUB': 'Bar/Pub event' },
    { '&eventcode=LGB': 'Gay/Lesbian event' },
    { '&eventcode=SPORT': 'Sporting event' },
    { '&eventcode=ARTS': 'The Arts' },
  ]
  
  const typeChange = (e) => {
    setEventCode(e.target.value)
    console.log(eventCode)
  }

  const dateChange = (date) => {
    setSelectedDate(date)
    const minDateFormat = `&minDate=${date.toISOString().split('T')[0]}`
    const maxDateFormat = `&maxDate=${date.toISOString().split('T')[0]}`
    setMinDate(minDateFormat)
    setMaxDate(maxDateFormat)
    console.log(minDateFormat, maxDateFormat)
  }

  const handleInput = (e) => {
    input = `&keyword=${e.target.value}`
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(input)
    console.log(search)
  }

  useEffect(() => {
    console.log(checked)
    checked ? setForSale('&ticketsavailable=true') : setForSale('')
    
  }, [checked])

  return (
    <div className="filters">
      <Container className='mt-4'>
        <Row>
        <Col sm="4" md="4" lg="4" className="filter mb-4">
          <label htmlFor="selectEventType">Type of Event</label>
          <select onChange={typeChange} name="selectEventType">
            {eventTypes.map(type => <option key={Object.keys(type)} value={Object.keys(type)}>{Object.values(type)}</option>)}
          </select>
          <label htmlFor="calendar">Pick a Date</label>
          <ReactDatePicker 
            name="calendar"
            selected={selectedDate} 
            onChange={dateChange}
            dateFormat='dd/MM/yyyy'  
            minDate={new Date()}
          />
          <form onSubmit={handleSearch}>
            <input type="search" id="search" name="search" onChange={handleInput} placeholder='Search Events'/>
          </form>
          <label>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
            Tickets Available Only
          </label>
          
        </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Filters