import React from 'react'
import { Sidebar } from '../interface/Sidebar';
import { Slider } from '../interface/Slider';
import { NavLink } from 'react-router-dom';
import '../sass/Home.scss';

//icons
import creditCard from '../assets/creditCard.png';
import facebookIcon from '../assets/facebookIcon.png';
import instagramIcon from '../assets/instagramIcon.png';
import snapchatIcon from '../assets/snapchatIcon.png';
import whatsAppIcon from '../assets/whatsAppIcon.png';
import messageIcon from '../assets/messageIcon.png';
import phoneIcon from '../assets/phoneIcon.png';
import flame from '../assets/flame.png';
import eye from '../assets/eye.png';
import book from '../assets/book.png';

//images 
const img1 = 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_noticia__small/public/noticias/mascota-autoestima-ninos.jpg';
const qrImage = 'https://www.shutterstock.com/image-vector/qr-code-vector-square-icon-600nw-2143529405.jpg';

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
              <NavLink end to='/Donations' className='donations__button'>
                <img src={creditCard}/>
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

        <footer>
          <div className='footer'>
            <div className='footer__container'>
              <h2>APP ADOPT PETS</h2>
              <p>
                Watch in the differents red socials and view the animals with dogs, 
                cats and rabbits, ready for adopt and search a new family.
              </p>
              <img src={facebookIcon} alt="Facebook Red Social" />
              <img src={instagramIcon} alt="Instagram Red Social" />
              <img src={snapchatIcon} alt="Snapchat Red Social" />
              <img src={whatsAppIcon} alt="whatsApp Nuber" />
            </div>
            <div className='footer__container'>
              <h2>Contact Us</h2>
              <div>
                <div>
                  <img src={messageIcon} alt="Adress Gmail" />
                  <p>AppAdoptPets@gmail.com</p>
                </div>
                <div>
                  <img src={phoneIcon} alt="Phone number" />
                  <p>+57 340 41422344</p>
                </div>
              </div>
            </div>
            <div className='footer__container'>
              <h2>Donations</h2>
              <p>Our QR for donations and take you so much!</p>
              <img className='footer__imgQR' src={qrImage} alt="QR APP ADOPT PETS" />
            </div>
          </div>
        </footer>
    </div>
  )
}

export { Home };