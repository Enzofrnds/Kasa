import './Footer.css';
import logo from '../../assets/logo-footer.svg';

function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={logo} alt="Kasa logo" />
            <p className='footer__text'>© 2020 Kasa. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;