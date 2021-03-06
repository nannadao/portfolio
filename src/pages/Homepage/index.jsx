import React from 'react'

import Portrait from '../../components/Portrait'
import './Homepage.scss'

const Homepage = () => (
  <div className='homepage' id='homepage'>
    <div className='homepage__content'>
      <div className='homepage__intro'>
        <h1> Hi! 👋 </h1>
        <p> I'm Nanna Dao - </p>
        <p className='homepage__intro--highlight'>
          I'm a <span> Full-stack Developer </span>{' '}
        </p>
      </div>
      <div className='homepage__picture'>
        <Portrait />
      </div>
    </div>
    <div className='homepage__scroll'>
      <i className='fas fa-chevron-down fa-lg'></i>
      <p> See my projects </p>
    </div>
  </div>
)

export default Homepage
