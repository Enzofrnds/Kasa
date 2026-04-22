import { useState } from 'react'
import './Accordion.css'

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="accordion">
            <div 
                className="accordion__header" 
                onClick={() => setIsOpen(!isOpen)}
                
            >
                <h3>{title}</h3>
                <i className={`fa-solid fa-angle-up ${isOpen ? 'rotate' : ''}`}></i>
            </div>
            <div className={`accordion__content ${isOpen ? 'open' : ''}`}>
                {content}
            </div>
        </div>
    );
}

export default Accordion;