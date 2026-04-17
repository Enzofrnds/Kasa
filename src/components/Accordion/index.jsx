import { useState } from 'react'
import './Accordion.css'

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300);
    };

    return isOpen ? (
        <div className='accordion'>
            <div className='accordion__header'>
                {title}
                <i className="fa-solid fa-angle-down" onClick={handleClose}></i>
            </div>
            <div className={`accordion__content${isClosing ? ' closing' : ''}`}>
                {content}
            </div>
        </div>
    ) : (
        <div className='accordion'>
            <div className='accordion__header'>
                {title}
                <i className="fa-solid fa-angle-down rotate" onClick={() => setIsOpen(true)}></i>
            </div>
        </div>
    );
}

export default Accordion;