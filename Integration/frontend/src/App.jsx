import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
import Navbar from './Components/Navbar.jsx'
import Registration from './Components/Registration.jsx'
import { BrowserRouter } from 'react-router-dom';
import Booking from './Components/UserBooking.jsx';
import About from './Components/About.jsx';
import AdminS from './Components/AdminS.jsx';
import AdminH from './Components/AdminH.jsx';
import First from './Components/First.jsx';
import Adminget from './Components/Adminget.jsx';
import Admina from './Components/Admina.jsx';
import Adminre from './Components/Adminre.jsx';
import AdminBook from './Components/AdminBook.jsx';
import Cards from './Components/Cards.jsx';
import AdminCardv from './Components/AdminCardv.jsx';
// import Payment from './Components/Payment.jsx';
import Post from './Components/Post.jsx';
import Management from './Components/Management.jsx';
import MM from './Components/MM.jsx';
import UBook from './Components/UBook.jsx';
import UserBooking from './Components/UserBooking.jsx';
import Userget from './Components/Userget.jsx';
function App() {
  return (
    <>
		<BrowserRouter>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/About" element={<About />} />
        <Route path='Adminre' element={<Adminre/> }></Route>
        <Route path='AdminBook' element={<AdminBook/> }></Route>
        <Route path='/AdminH' element={<AdminH/>}/>
        <Route path='/AdminS' element={<AdminS/>}/>
        <Route path='/UserBooking' element={<UserBooking/>}/>
        <Route path='Adminget' element={<Adminget/>}></Route>
        <Route path='Management' element={<Management/>}></Route>
        {/* <Route path='Payment' element={<Payment/>}></Route> */}
        <Route path='AdminCardv' element={<AdminCardv/>}></Route>
        <Route path='MM' element={<MM/>}></Route>
        <Route path='Cards' element={<Cards/>}></Route>
        <Route path='Post' element={<Post/>}></Route>
        <Route path='Cards' element={<Cards/>}></Route>
        <Route path='Admina' element={<Admina/>}></Route>
        <Route path='Userget' element={<Userget/>}></Route>
        <Route path='UBook' element={<UBook/>}></Route>
      </Routes>
    </BrowserRouter>
		</>
  )
}

export default App
