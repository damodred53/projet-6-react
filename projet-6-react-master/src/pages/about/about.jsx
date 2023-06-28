import './about.css';
import Banner from '../../components/Banner.jsx';
import Footer from '../../components/Footer.jsx';


function About() {
    return(
        <div>
            <Banner />
            <p className='aboutp' >Ceci est la page about</p>
            <Footer />
        </div>
    )
}
export default About;