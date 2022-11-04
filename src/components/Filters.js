import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'

import FiltersLucky from './FiltersLucky'

const Filters = ({ eventCode, setEventCode, checked, setChecked, search, setSearch, selectedDate, setSelectedDate, setMinDate, setMaxDate, setForSale }) => {
  let input = ''

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
            <FiltersLucky eventCode={eventCode} setEventCode={setEventCode} selectedDate={selectedDate} setSelectedDate={setSelectedDate} setMinDate={setMinDate} setMaxDate={setMaxDate} />
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