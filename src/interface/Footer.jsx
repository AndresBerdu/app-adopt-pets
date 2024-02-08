import React from 'react';
import '../sass/Footer.scss';

//icons
import facebookIcon from '../assets/facebookIcon.png';
import instagramIcon from '../assets/instagramIcon.png';
import snapchatIcon from '../assets/snapchatIcon.png';
import whatsAppIcon from '../assets/whatsAppIcon.png';
import messageIcon from '../assets/messageIcon.png';
import phoneIcon from '../assets/phoneIcon.png';

//images
const qrImage = 'https://www.shutterstock.com/image-vector/qr-code-vector-square-icon-600nw-2143529405.jpg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <h2 className='footer__primaryTitle'>APP ADOPT PETS</h2>
            <p className='footer__abaut'>
                Watch in the differents red socials and view the animals with dogs, 
                cats and rabbits, ready for adopt and search a new family.
            </p>
            <div className='footer__redSocials'>
                <img className='footer__icons' src={facebookIcon} alt="Facebook Red Social" />
                <img className='footer__icons' src={instagramIcon} alt="Instagram Red Social" />
                <img className='footer__icons' src={snapchatIcon} alt="Snapchat Red Social" />
                <img className='footer__icons' src={whatsAppIcon} alt="whatsApp Nuber" />
            </div>
        </div>
        <div className='footer__container'>
            <div className='footer__dateContainer'>
                <h2 className='footer__secondTitle'>Contact Us</h2>
                <div className='footer__dates'>
                  <img src={messageIcon} alt="Adress Gmail" />
                  <p>AppAdoptPets@gmail.com</p>
                </div>
                <div className='footer__dates'>
                  <img src={phoneIcon} alt="Phone number" />
                  <p>+57 340 41422344</p>
                </div>
            </div>
        </div>
        <div className='footer__container'>
            <h2 className='footer__thirdTitle'>Donations</h2>
            <p className='footer__textDonations'>Our QR for donations and take you so much!</p>
            <img className='footer__imgQR' src={qrImage} alt="QR APP ADOPT PETS" />
        </div>
    </div>
  )
}

export { Footer };