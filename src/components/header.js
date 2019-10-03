import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const links = [
  {
    logo: true,
    title: '',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Our Work',
    url: '/about'
  },
  {
    button: true,
    title: 'Contact Us',
    url: '/contact'
  }
]

const Header = ({ siteTitle }) => (
  <header className='headerNav'>
    <div className='navContainer'>
      <h5 className='logoTitle'>
        <Link
          to="/"
          className='titleLink'
        >
          {siteTitle}
        </Link>
      </h5>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
