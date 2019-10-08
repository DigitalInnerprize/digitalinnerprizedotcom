import React from "react"
import { Link } from "gatsby"

const ServiceCards = () => (
  <div className="serviceCardContainer">
  <div className='serviceCards'>
    <div className='serviceCardText'>
      <h3 className='serviceCardTextTitle'>
        <Link to="/ourwork" className='serviceCardsLink'>
          Click to view more of our work
        </Link>
      </h3>
    </div>
    <div className='serviceCard serviceCard-1'>
      <div className="overlay overlay-1">
        <h3 className='cardTitle'>Makena Capital Management</h3>
      </div>
      
    </div>
    <div className='serviceCard serviceCard-2'>
      <div className="overlay overlay-2">
        <h3 className='cardTitle'>Winston Retail</h3>
      </div>
      
    </div>
    <div className='serviceCard serviceCard-3'>
      <div className="overlay overlay-3">
        <h3 className='cardTitle'>Ubisoft</h3>
      </div>
    </div>
    </div>
  </div>
)

export default ServiceCards
