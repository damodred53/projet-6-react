import './error.css';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

function Error() {
    return(
        <div>
            <Banner />
            <p>Ceci est la page 404</p>
            <div>
                <h1 className='test'>Il y a une grosse erreur</h1>
            </div>
            <Footer />
        </div>
    )
}
export default Error;