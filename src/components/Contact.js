import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Contact = () => {
  const onClick = () => {
    window.location.href = 'mailto:digitalinnerprize@gmail.com';
  }

  return (
    <div className='contactContainer'>
      <div className="paddingContainer">      
        <div id="contactText">
          <h3 className='contactTitle'>Let's Talk Business!</h3>
          <p>A digital agency for brands that focus on creating great work and that gets phenomenal results along with a unique digital presence.</p>
          <button 
            className='contactBtn'
            onClick={onClick}>
              Contact Us
          </button>
        </div>
        </div>
    </div>
  )
}

export default Contact
