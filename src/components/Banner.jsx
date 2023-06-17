import logo from '../assets/logo_kasa_1.png';
import logo2 from '../assets/logo_kasa_2.png';
import logo3 from '../assets/logo_kasa_3.png';
import logo4 from '../assets/logo_kasa_4.png';
import { Link } from 'react-router-dom';



function Banner() {

    return (
        <div className='component_banner'>
            <div className='component_banner_logo'>
                <img src={logo} alt='première lettre'/>
                <img src={logo2} alt='deuxième lettre'/>
                <img src={logo3} alt='troisième lettre'/>
                <img src={logo4} alt='quatrième lettre'/>
            </div>
            <div>
            <nav className='nav_bar'>
                <Link to="/" className='underline_stop'><p className='p_1'>Accueil</p></Link>
                <Link to="/about" className='underline_stop'><p >A propos</p></Link>
            </nav>
            </div>
        </div>
    )

}
export default Banner;