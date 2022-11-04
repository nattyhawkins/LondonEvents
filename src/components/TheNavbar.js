
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const TheNavbar = ({ setEventCode, setSelectedDate, setMinDate, setMaxDate, setSearch, setForSale, setChecked,  }) => {

  const resetAll = () => {
    console.log('reset')
    setEventCode('')
    setSelectedDate(new Date())
    setMinDate('')
    setMaxDate('')
    setSearch('')
    setForSale('')
    setChecked(false)
  }


  return (
    <Navbar expand="sm" className="TheNavbar">
      <Container>
        <Nav.Link to="/" className="slogan" >Discover London</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link onClick={resetAll} to="/events">See All Events</Nav.Link>
            <p className="splitter" style={ {color: 'orangered', padding: '6px' } } >|</p>
            <Nav.Link to="/events/single">I'm Feeling Lucky</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
export default TheNavbar