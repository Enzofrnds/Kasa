import './Home.css'
import Annonce from '../../components/Annonce';
import annonces from '../../datas/annonces.json';

function Home() {
    return (
        <main>
            <section className='hero'>
                <h1 className='hero__title'>Chez vous, <br />partout et ailleurs</h1>
            </section>
            <section className='annonces'>
                {annonces.map((annonce) => (
                    <Annonce key={annonce.id} {...annonce} />
                ))}
            </section>
        </main>
    );
}

export default Home;