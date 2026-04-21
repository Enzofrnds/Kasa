import { useState } from 'react'
import './Accordion.css'

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasToggled, setHasToggled] = useState(false);
    
    const handleToggle = () => {
        setHasToggled(true);
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="accordion">
            <div 
                className="accordion__header" 
                onClick={handleToggle}
                
            >
                <h3>{title}</h3>
                <i className={`fa-solid fa-angle-up ${isOpen ? 'rotate' : ''}`}></i>
            </div>
            <div className={`accordion__content ${isOpen ? 'open' : hasToggled ? 'closing' : 'closed'}`}>
                {content}
            </div>
        </div>
    );
}

export default Accordion;