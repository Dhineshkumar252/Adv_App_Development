import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
import Navbar from './Components/Navbar.jsx'
import Registration from './Components/Registration.jsx'
import { BrowserRouter } from 'react-router-dom';
import Booking from './Components/Booking.jsx';
import Card from './Components/Card.jsx';
import About from './Components/About.jsx';
import AdminS from './Components/AdminS.jsx';
import AdminH from './Components/AdminH.jsx';
import First from './Components/First.jsx';
import Adminget from './Components/Adminget.jsx';
import Admina from './Components/Admina.jsx';
import Adminre from './Components/Adminre.jsx';
import AdminBook from './Components/AdminBook.jsx';

function App() {
  return (
    <>
		<BrowserRouter>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/About" element={<About />} />
        <Route path="/Card" element={<Card/>} />
        <Route path='Adminre' element={<Adminre/> }></Route>
        <Route path='AdminBook' element={<AdminBook/> }></Route>
        <Route path='/AdminH' element={<AdminH/>}/>
        <Route path='/AdminS' element={<AdminS/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='Adminget' element={<Adminget/>}></Route>
        <Route path='Admina' element={<Admina/>}></Route>
      </Routes>
    </BrowserRouter>
		</>
  )
}

export default App
