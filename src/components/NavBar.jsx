import React from 'react';
import "../styles/NavBar.css"

function NavBar({grouping, sorting, setGrouping, setSorting}) {
  return (
    <div className='navbar'>
        <button className='display-btn'>
            display
        </button>
        <button className='sub-btn'>
                <a href="">Status</a>
                <a href="">Priority</a>
                <a href="">Status</a>
            </button>
            <button className='sub-btn'>
                <a href="">Priority</a>
                <a href="">Title</a>
            </button>
    </div>
  )
}

export default NavBar