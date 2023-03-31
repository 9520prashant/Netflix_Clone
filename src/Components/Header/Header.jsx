import React from 'react'
import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im"

const Header = () => {
  return (
       <nav className='header'>
        <img src="./Netflix.png" alt="sfs" />
        <div>
            <Link to="/TV Shows">TV Shows</Link>
            <Link to="/Movies">Movies</Link>
            <Link to="/Recently Added">Recently Added</Link>
            <Link to="/My Lists">My Lists</Link>
        </div>
        <ImSearch/>
       </nav>
  )
}

export default Header
