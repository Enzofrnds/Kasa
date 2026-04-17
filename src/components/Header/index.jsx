import './Header.css';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.svg';   

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Kasa logo" className="header__logo" />
            <nav>
                <ul className="header__nav">
                    <li>
                        <NavLink className="header__nav__link" to="/" >Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className="header__nav__link" to="/about">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;