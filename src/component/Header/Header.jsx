import React from 'react'
import './Header.css'
import Dropdowns from '../Dropdowns/Dropdowns'

const Header = ({grouping, setGrouping, ordering, setOrdering}) => {
  return (
    <header>
         <Dropdowns grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
    </header>
  )
}

export default Header
