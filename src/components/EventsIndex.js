
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import TheNavbar from "./TheNavbar"
// import Calendar from './Calendar'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDays, faClock, faSterlingSign, faUser } from '@fortawesome/free-solid-svg-icons'

const Events = () => {

  const [ events, setEvents ] = useState([])
  const [ eventCode, setEventCode ] = useState('')
  const [ selectedDate, setSelectedDate ] = useState(new Date())
  const [ minDate, setMinDate ] = useState('')
  const [ maxDate, setMaxDate ] = useState('')

  useEffect(() => {
    const getEvents = async () => {
      try {
        const apiKey = 'api_key=7544cdafe70d0b9d8a15ae17a08a53fd'
        const ldnCoord = 'latitude=51.509865&longitude=-0.118092&radius=40'
        const { data } = await axios.get(`https://www.skiddle.com/api/v1/events/search/?${apiKey}&${ldnCoord}&descriptions=1&limit=100${eventCode}${minDate}${maxDate}`)
        setEvents(data.results)
        console.log(data.results)
      } catch (err) {
        console.log('here -> ' + err.data)
      }
    }
    getEvents()
  }, [eventCode, minDate, maxDate])

//Date 

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
  
  return (
    <>
      <TheNavbar />
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
            <label htmlFor="searchBar">Pick a Date</label>
          </Col>
          </Row>
        </Container>
      </div>
      <main className="events-page">
        <Container className='mt-4'>
          <Row>
            {events.length > 0 && 
              events.map(event => {
                const { id, eventname, date, venue, openingtimes, xlargeimageurl, minage, entryprice } = event
                const eventDate = new Date(date).toDateString()
                return (
                  <Col key={id} sm="4" md="4" lg="4" className='event-card mb-4'>
                    {/* <Link to={`/event/${id}`}> */}
                    <Card>
                      <div className="card-image" style={{ backgroundImage: `url(${xlargeimageurl})` }}></div>
                      <Card.Body>
                        <Card.Title className='mb-0'>{eventname}</Card.Title>
                        <Card.Text className='mb-0'><span><FontAwesomeIcon className="icon" icon={faLocationDot}/></span>  {venue.name}</Card.Text>
                        <Card.Text className='mb-0'><span><FontAwesomeIcon className="icon" icon={faCalendarDays}/></span>  {eventDate}</Card.Text>
                        <Card.Text className='mb-0'><span><FontAwesomeIcon className="icon" icon={faClock}/></span>  {openingtimes.doorsopen} till {openingtimes.doorsclose}</Card.Text>
                        <Card.Text className='mb-0'><span><FontAwesomeIcon className="icon" icon={faSterlingSign}/></span>  { entryprice ? `£${entryprice}` : 'Free admission' }</Card.Text>
                        <Card.Text className='mb-0'><span><FontAwesomeIcon className="icon" icon={faUser}/></span>  { (!minage || minage === '0') ? 'No age restriction' : `Minimum age ${minage}`}</Card.Text>
                      </Card.Body>
                    </Card>
                    {/* </Link> */}
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Events

  {/* <iframe
    title={id}
    width="200"
    height="200"
    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyALd_bYvfEc51wNsGxL8ZHFHjYk4aHi_mA&q=${venue.latitude},${venue.longitude}`}>
  </iframe> */}