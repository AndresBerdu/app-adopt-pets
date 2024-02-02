import React from 'react'
import "../sass/Sidebar.scss"

function  Sidebar() {

  return (
    <div className='sidebar'>
        <h2 className='sidebar__logo'>APP ADOPT PETS</h2>
        <div className='sidebar__options'>
            <p className='sidebar__button'>Home</p>
            <p className='sidebar__button'>Doggies</p>
            <p className='sidebar__button'>Kitties</p>
            <p className='sidebar__button'>Bunnies</p>
            <p className='sidebar__button'>Donations</p>
        </div>
    </div>
  )
}

export { Sidebar };