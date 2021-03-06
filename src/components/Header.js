import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  MenuItem,
  Menu,
  MenuButton
} from './Menu'

const menu = [
  {title:'Home', url:'/'},
  {title:'About Us', url:'/aboutus'},
  {title:'Our Work', url:'/ourwork'}
];

function Header({ siteTitle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuItems = menu.map(({title, url},index)=>{
    return (
      <Link key={index} to={url}>
        <MenuItem
          delay={`${index * 0.1}s`}
          onClick={() => setMenuOpen(false)}>
          {title}
        </MenuItem>
      </Link>
    )
  });

  return (
    <header className='headerNav'>
      <div className='navContainer'>
        <div className="container">
        <h5 className='logoTitle'>
          <Link
            to="/"
            className='titleLink'
          >
            {siteTitle}
          </Link>
        </h5>
        <MenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} color='#090C08'/>
      </div>
      </div>
      <Menu open={menuOpen}>
        {menuItems}
      </Menu>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
