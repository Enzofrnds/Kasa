import {useState} from 'react'
import './Accordion.css'

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className='accordion'>
            <div className='accordion__header'>
                {title}
                <i className="fa-solid fa-angle-up" onClick={() => setIsOpen(false)}></i>
            </div>
            <div className='accordion__content'>
                {content}
            </div>
        </div>
    ) : (
        <div className='accordion'>
            <div className='accordion__header'>
                {title}
                <i className="fa-solid fa-angle-down" onClick={() => setIsOpen(true)}></i>
            </div>
        </div>
    );

}

export default Accordion;