import React from 'react'
import { Sidebar } from '../interface/Sidebar';
import { Slider } from '../interface/Slider';
import { Footer } from '../interface/Footer';
import { NavLink } from 'react-router-dom';
import '../sass/Home.scss';

//icons
import creditCard from '../assets/creditCard.png';
import flame from '../assets/flame.png';
import eye from '../assets/eye.png';
import book from '../assets/book.png';

//images 
const img1 = 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_noticia__small/public/noticias/mascota-autoestima-ninos.jpg';

const Home = () => {
  return (
    <div>
        <header>
          <Sidebar/>
        </header>
        <body>
          <Slider/>
          <div className='donations'>
            <div className='donations__container'>
              <h2 className='donations__title'>How Can You Help Us?</h2>
              <p className='donations__text'>
                We installation need donations for keep animals, fed and good conditions. 
                Thanks for your  donationsand help pets, for search a new family.
              </p>
                <NavLink className='donations__button' end to='/Donations'>
                  <img className='donations__buttonImagen' src={creditCard}/>
                  <p>Donations</p>  
                </NavLink>
            </div>
            <div>
              <img src={img1} alt='Pets with owner' />
            </div>
          </div>

          <div className='abaut'>
            <h1 className='abaut__titlePrincipal'>ABAUT US</h1>
            <div className='abaut__container'>
              <img className='abaut__img' src={flame} alt='flameIcon'/>
              <section className='abaut__objetives'>
                <h2 className='abaut__title'>Purpose</h2>
                <p className='abaut__text'>
                  Our purpose are help the all animals that need us help you so 
                  much in food, home and the most important FAMILY.
                </p>
              </section>
            </div>
            <div className='abaut__container'>
              <img className='abaut__img' src={eye} alt='eyeIcon'/>
              <section className='abaut__section'>
                <h2 className='abaut__title'>Vision</h2>
                <p className='abaut__text'>
                  Our vision are build a new future for the all animals of zone urbane 
                  of city, in the future we are make campaigns in more cities.
                </p>
              </section>
            </div>
            <div className='abaut__container'>
              <img className='abaut__img' src={book} alt='bookIcon'/>
              <section className='abaut__section'>
                <h2 className='abaut__title'>Mision</h2>
                <p className='abaut__text'>
                  Our mision is help in the now a the animal that here in street and 
                  situacion of violent, we are fundations is protect the animals.
                </p>
              </section>
            </div>
          </div>
        </body>
        <Footer/>
    </div>
  )
}

export { Home };