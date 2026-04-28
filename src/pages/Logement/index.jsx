import './Logement.css';
import Annonce from '../../datas/annonces.json';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';
import Accordion from '../../components/Accordion';
import Error from '../Error';
import { useNavigate , useParams } from 'react-router-dom';
import { useState } from 'react';

function Logement() {
    const { id } = useParams();
    const annonce = Annonce.find((item) => item.id === id);
    const rating = parseInt(annonce?.rating);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("");

    return !annonce ? (
        <Error />
    ) : (
        <main>
            <div className='carrousel'>
                {annonce.pictures.length > 1 && (
                    <img 
                        className=' arrow arrow-left' 
                        src={arrowLeft} alt="Précédent"
                        onClick={() => {
                            setCurrentIndex((prevIndex) => (prevIndex === 0 ? annonce.pictures.length - 1 : prevIndex - 1));
                            setDirection("left");
                        }}
                    />
                )}
                <img 
                    key={currentIndex}
                    className={`carrousel-img ${direction}`} 
                    src={annonce.pictures[currentIndex]}
                    alt={annonce.title} />
                {annonce.pictures.length > 1 && (
                    <img 
                        className='arrow arrow-right' 
                        src={arrowRight} alt="Suivant"
                        onClick={() => {
                            setCurrentIndex((prevIndex) => (prevIndex === annonce.pictures.length - 1 ? 0 : prevIndex + 1));
                            setDirection("right");
                        }}
                    />
                )}
                {annonce.pictures.length > 1 && (
                    <p className='carrousel-index'>
                        {currentIndex + 1} / {annonce.pictures.length}
                    </p>
                )}
            </div>
            <section className='info'>
                <div className='info-left'>
                    <h1 className='info-title'>{annonce.title}</h1>
                    <p className='info-location'>{annonce.location}</p>
                    <div className='tags'>
                        {annonce.tags.map((tag, index) => (
                            <span key={index} className='tag'>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='info-right'>
                    <div className='host'>
                        <p className='host-name'>{annonce?.host.name}</p>
                        <img className='host-picture' src={annonce.host.picture} alt={annonce.host.name} />
                    </div>
                    <div className='rating'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <i
                                key={index}
                                className={`star ${index < rating ? 'fa-solid active' : 'fa-solid inactive '} fa-star`}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <div className='accordions'>
                <Accordion title="Description" content={annonce.description} />
                <Accordion title="Équipements" content={annonce.equipments.map((equipment, index) => (
                    <p key={index}>{equipment}</p>
                ))} />
            </div>
        </main>

        
    );
}

export default Logement;