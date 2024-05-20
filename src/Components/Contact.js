import React from 'react'
import One from '../Components/One'

function Contact(props) {
  return (
    <div>
      <h1>Contact Me</h1>
      <One data={props.data}></One>
    </div>
  )
}

export default Contact
