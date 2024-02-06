import React from 'react'
import { Sidebar } from '../interface/Sidebar';
import { Slider } from '../interface/Slider';
import { NavLink } from 'react-router-dom';
import '../sass/Home.scss'

const Home = () => {
  return (
    <div>
        <Sidebar/>
        <Slider/>
        <div className='donations__container'>
          <h2>How Can You Help Us?</h2>
          <p className='donations__text'>
          We installation need donations for keep animals, fed and good conditions. Thanks for your  donationsand help pets, for search a new family.
          </p>
          <p className='donations__button'>        
            <NavLink end to='/Donations'>Donations</NavLink>
          </p>
        </div>
    </div>
  )
}

export { Home };