import { useState } from 'react'
import ClockHeading from './components/clockHeading'
import ClockSlogan from './components/clockslogan'
import ClockTime from './components/currentTime'


import './App.css'

function App() {
 

  return <div> 
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <ClockTime></ClockTime>
      </div>
    
  
}

export default App
