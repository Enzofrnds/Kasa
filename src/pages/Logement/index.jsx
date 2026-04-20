import './Logement.css';
import Annonce from '../../datas/annonces.json';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';
import Accordion from '../../components/Accordion';
import { useParams } from 'react-router-dom';

function Logement() {
    const { id } = useParams();
    const annonce = Annonce.find((item) => item.id === id);

    return (
        <main>
            <div className='carrousel'>
                <img className=' arrow arrow-left' src={arrowLeft} alt="Précédent"/>
                <img className='carrousel-img' src={annonce?.cover} alt={annonce?.title} />
                <img className='arrow arrow-right' src={arrowRight} alt="Suivant"/>
            </div>
            <section className='info'>
                <div className='info-left'>
                    <h1 className='info-title'>{annonce?.title}</h1>
                    <p className='info-location'>{annonce?.location}</p>
                    <div className='tags'>
                        {annonce?.tags.map((tag, index) => (
                            <span key={index} className='tag'>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='info-right'>
                    <div className='host'>
                        <p className='host-name'>{annonce?.host.name}</p>
                        <img className='host-picture' src={annonce?.host.picture} alt={annonce?.host.name} />
                    </div>
                    <div className='rating'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <i
                                key={index}
                                className={`fa-solid fa-star star ${index < Number(annonce?.rating) ? 'active' : 'inactive'}`}
                                aria-hidden='true'
                            />
                        ))}
                    </div>
                </div>
                <div className='accordions'>
                        <Accordion title="Description" content={annonce?.description} />
                        <Accordion title="Équipements" content={annonce?.equipments.map((equipment, index) => (
                            <span key={index}>{equipment}</span>
                        ))} />
                    </div>
            </section>
        </main>

        
    );
}

export default Logement;