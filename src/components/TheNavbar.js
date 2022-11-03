
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const TheNavbar = () => {

  return (
    <Navbar expand="sm" className="TheNavbar">
      <Container>
        <Navbar.Brand as={Link} to="/">🙂</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link to="/events">see events</Nav.Link>
            <Nav.Link to="/events/single"> | SINGLE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

  )

}
export default TheNavbar