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
        <Row className="filters-row">
          <div className="filters-container">
          {/* <Col className="filter-col mb-4 col-8 offset-2 col-sm-6 offset-sm-0 col-md-4 offset-md-0 col-lg-3 offset-lg-0"> */}
            <div className="type-container">
              <label htmlFor="selectEventType">Type of Event</label>
              <select onChange={typeChange} name="selectEventType">
                {eventTypes.map(type => <option key={Object.keys(type)} value={Object.keys(type)}>{Object.values(type)}</option>)}
              </select>
            </div>
            <div className="date-container">
              <label htmlFor="calendar">Pick a Date</label>
              <ReactDatePicker 
                name="calendar"
                selected={selectedDate} 
                onChange={dateChange}
                dateFormat='dd/MM/yyyy'  
                minDate={new Date()}
              />
            </div>
            <div className="search-container">
              <form onSubmit={handleSearch}>
                <input type="search" id="search" name="search" onChange={handleInput} placeholder='Search Events'/>
              </form>
            </div>
            <div className="tickets-container">
              <label>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                Tickets Available Only
              </label>
            </div>
          {/* </Col> */}
          </div>
        </Row>
      </Container>
    </div>
  )
}
export default Filters