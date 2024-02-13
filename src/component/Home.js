import React from 'react'
import './Home.css'
import Slider from './Slider'
import HomeCourses from './HomeCourses'
import Batches from './Batches'
import About from './About'



export const Home = () => {
  return (
    <div>
      <Slider />
      <HomeCourses />
      <Batches />
    </div>
  )
}
