import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomeCourses from './HomeCourses';
import About from './About';
import { Home } from './Home';
import Batches from './Batches';
import NoPage from './NoPage';
import Contact from './Contact'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<HomeCourses />} />
        <Route path='/batches' element={<Batches />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default Routing