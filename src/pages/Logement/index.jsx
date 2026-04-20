import './Logement.css';
import Annonce from '../../datas/annonces.json';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';
import starActive from '../../assets/star-active.png';
import starInactive from '../../assets/star-inactive.png';
import Accordion from '../../components/Accordion';

function Logement() {
    return (
        <main>
            <div className='carrousel'>
                <img className=' arrow arrow-left' src={arrowLeft} alt="Précédent"/>
                <img className='carrousel-img' src={Annonce[0].cover} alt={Annonce[0].title} />
                <img className='arrow arrow-right' src={arrowRight} alt="Suivant"/>
            </div>
            <section className='info'>
                <div className='info-left'>
                    <h1 className='info-title'>{Annonce[0].title}</h1>
                    <p className='info-location'>{Annonce[0].location}</p>
                    <div className='tags'>
                        {Annonce[0].tags.map((tag, index) => (
                            <span key={index} className='tag'>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='info-right'>
                    <div className='host'>
                        <p className='host-name'>{Annonce[0].host.name}</p>
                        <img className='host-picture' src={Annonce[0].host.picture} alt={Annonce[0].host.name} />
                    </div>
                    <div className='rating'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <img
                                key={index}
                                className='star'
                                src={index < Annonce[0].rating ? starActive : starInactive}
                                alt={index < Annonce[0].rating ? 'Étoile active' : 'Étoile inactive'}
                            />
                        ))}
                    </div>
                </div>
                <div className='accordions'>
                        <Accordion title="Description" content={Annonce[0].description} />
                        <Accordion title="Équipements" content={Annonce[0].equipments.map((equipment, index) => (
                            <span key={index}>{equipment}</span>
                        ))} />
                    </div>
            </section>
        </main>

        
    );
}

export default Logement;