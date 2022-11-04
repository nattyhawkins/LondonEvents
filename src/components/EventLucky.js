import axios from "axios"
import { useEffect, useState } from "react"
import EventSingle from "./EventSingle"
import Filters from "./Filters"

const EventLucky = () => {

  const [ events, setEvents] = useState([])
  const [ eventCode, setEventCode ] = useState('')
  const [ selectedDate, setSelectedDate ] = useState(new Date())
  const [ search, setSearch ] = useState('')
  const [ checked, setChecked ] = useState(false)
  const [ forSale, setForSale ] = useState('')
  const [ minDate, setMinDate ] = useState('')
  const [ maxDate, setMaxDate ] = useState('')
  const [ luckyId, setLuckyId ] = useState('')
  
  useEffect(() => {
    const getEvents = async () => {
      try {
        const apiKey = 'api_key=7544cdafe70d0b9d8a15ae17a08a53fd'
        const { data } = await axios.get(`https://www.skiddle.com/api/v1/events/?${apiKey}&ticketsavailable=true`)
        setEvents(data.results)
        console.log(data.results)
        
      } catch (err) {
        console.log(err)
      }
    }
    getEvents()
  }, [])

  useEffect(() => {
    
    console.log(events)
    const randomIndex = Math.floor(Math.random() * events.length)
    events.length > 0 && setLuckyId(events[randomIndex].id)
  }, [events])

return (
  <>
    {/* <Filters eventCode={eventCode} setEventCode={setEventCode} checked={checked} setChecked={setChecked} search={search} setSearch={setSearch} selectedDate={selectedDate} setSelectedDate={setSelectedDate} setMinDate={setMinDate} setMaxDate={setMaxDate} setForSale={setForSale}/> */}
    {/* test id = '36201809' */}
    {luckyId.length > 0 && <EventSingle luckyId={luckyId}/>}
  </>
)

}
export default EventLucky