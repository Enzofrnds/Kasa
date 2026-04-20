import './Annonce.css'
import { Link } from 'react-router-dom';

function Annonce({ id, title, cover }) {
    return (
        <Link to={`/Logement/${id}`} className="annonces__item">
            <img className='annonces__item__img' src={cover} alt={title} />
            <h2 className="annonces__item__title">{title}</h2>
        </Link>
    );
}

export default Annonce;