import './About.css';
import Accordion from '../../components/Accordion';
import about from '../../datas/about.json';

function About() {
    return (
        <main>
            <section className='hero-about'>
            </section>
            <section className='info'>
                {about.map((item) => (
                    <Accordion key={item.id} title={item.title} content={item.content} />
                ))}
            </section>
        </main>
    );
}

export default About;