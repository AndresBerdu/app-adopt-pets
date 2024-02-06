import React from 'react';
import { NavLink } from 'react-router-dom';
import "../sass/Sidebar.scss";

function  Sidebar() {

  return (
    <nav className='sidebar'>
        <h2 className='sidebar__logo'>APP ADOPT PETS</h2>
        <div className='sidebar__options'>
            <ul>
              <li>
                <NavLink end to='/'>
                  <p className="sidebar_button">Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink end to='/Dogs'>
                  <p className="sidebar_button">Doggies</p>
                </NavLink> 
              </li>
              <li>
                <NavLink end to='/Cats'>
                  <p className="sidebar_button">Kitties</p>
                </NavLink>
              </li>
              <li>
                <NavLink end to='/Rabbits'>
                  <p className="sidebar_button">Bunnies</p>
                </NavLink>
              </li>
              <li>
                <NavLink end to='/Donations'>
                  <p className="sidebar_button">Donations</p>
                </NavLink>
              </li>
            </ul>         
        </div>
    </nav>
  )
}

export { Sidebar };