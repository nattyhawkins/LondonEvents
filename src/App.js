import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventSingle from './components/EventSingle'
import EventsIndex from './components/EventsIndex'
import Home from './components/Home'
import EventLucky from './components/EventLucky'



const App = () => {

  

  return (
    <>
      <BrowserRouter>   
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<EventsIndex/>} />
          {/* <Route path='/events/:id' element={<EventSingle/>} /> */}
          <Route path='/events/single' element={<EventSingle/>} />
          <Route path='/events/lucky' element={<EventLucky/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App