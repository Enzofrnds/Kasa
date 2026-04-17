import './Annonce.css'

function Annonce(annonces) {
    return (
        <div className="annonces__item">
            <img className='annonces__item__img' src={annonces.cover} alt={annonces.title} />
            <h2 className="annonces__item__title">{annonces.title}</h2>
        </div>
    );
}

export default Annonce;