import { faCalendarDays, faClock, faLocationDot, faSterlingSign, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import TheNavbar from "./TheNavbar"


const EventsIndex = () => {

  const [ events, setEvents ] = useState([])
  // const [ map, setMap ] = useState()

  useEffect(() => {
    const getEvents = async () => {
      try {
        const apiKey = 'api_key=7544cdafe70d0b9d8a15ae17a08a53fd'
        const ldnCoord = 'latitude=51.509865&longitude=-0.118092&radius=40'
        const { data } = await axios.get(`https://www.skiddle.com/api/v1/events/search/?${apiKey}&${ldnCoord}&descriptions=1&limit=100`)
        setEvents(data.results)
        console.log(data.results)
      } catch (err) {
        console.log(err)
      }
    }
    getEvents()
  }, [])


  return  <>
    <TheNavbar/>
    <main className="events-page">
      <Container className='mt-4'>
        <Row>
          {events.length > 0 && 
            events.map(event => {
              const { id, eventname, date, venue, openingtimes, largeimageurl, minage, entryprice } = event
              return (
                <Col key={id} sm="6" md="4" className='event-card mb-4'>
                  <Link to={`/events/${id}`}/>
                  <Card>
                    <div className="card-image" style={{ backgroundImage: `url(${largeimageurl})` }}></div> 
                    <Card.Body>
                      <Card.Title className='mb-0'>{eventname}</Card.Title>
                      <Card.Text className='mb-0'><FontAwesomeIcon icon={faLocationDot}/>  {venue.name}</Card.Text>
                      <Card.Text className='mb-0'><FontAwesomeIcon icon={faCalendarDays}/>  {date}  <FontAwesomeIcon icon={faClock}/>  {openingtimes.doorsopen} till {openingtimes.doorsclose}</Card.Text>
                      <Card.Text className='mb-0'><FontAwesomeIcon icon={faSterlingSign}/>  { entryprice ? `£${entryprice}` : 'Free admission' }</Card.Text>
                      <Card.Text className='mb-0'><FontAwesomeIcon icon={faUser}/>  { (!minage || minage === '0') ? 'No age restriction' : `Minimum age ${minage}`}</Card.Text>
                      <iframe
                        title={id}
                        width="200"
                        height="200"
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyALd_bYvfEc51wNsGxL8ZHFHjYk4aHi_mA&q=${venue.latitude},${venue.longitude}`}>
                      </iframe>
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

}
export default EventsIndex