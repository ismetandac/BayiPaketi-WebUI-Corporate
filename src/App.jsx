import './App.css'
import { useState } from 'react';
import Navbar from './views/Navbar.jsx'
import Home from './views/Home.jsx'
import ServicesList from './views/ServicesList.jsx'
import AboutUs from './views/AboutUs.jsx'
import ReviewList from './views/ReviewList.jsx'
import ContactFeedback from './views/ContactFeedback.jsx'
import Footer from './views/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [isAuth, setIsAuth]= useState({name: '', email: '', auth: false})

  return (
    <>
      <BrowserRouter>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<ServicesList />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/reviews' element={<ReviewList />}></Route>
          <Route path='/contact' element={<ContactFeedback isAuth={isAuth} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
