import React from 'react'
import { Route, Routes } from 'react-router';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Header from './Component/Header/Header';
import CardDetail from './Component/CardDetails/CardDetail';

function App() {
  return (
   <>
   <Header />
    <Routes>
       <Route path='/' element={<Home />} />
      <Route path='/about/*' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about/card1' element={<CardDetail/>} />

    </Routes>
   </>
  )
}

export default App;