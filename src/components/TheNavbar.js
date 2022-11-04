
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const TheNavbar = ({ setEventCode, setSelectedDate, setMinDate, setMaxDate, setSearch, setForSale, setChecked, setInput }) => {

  const resetAll = () => {
    console.log('reset')
    setEventCode('')
    setMinDate('')
    setMaxDate('')
    setSearch('')
    setForSale('')
    setChecked(false)
    setInput('')
    setSelectedDate(new Date())
  }


  return (
    <Navbar expand="sm" className="TheNavbar">
      <Container>
        <Navbar.Brand as={Link} to="/">🙂</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link onClick={resetAll} as={Link} to="/events">See All Events</Nav.Link>
            <p className="splitter" style={ {color: 'orangered', padding: '6px' } } >|</p>
            <Nav.Link as={Link} to="/events/lucky">I'm Feeling Lucky</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
export default TheNavbar