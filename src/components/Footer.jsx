import logo5 from '../assets/logo_kasa_5.png';
import logo6 from '../assets/logo_kasa_6.png';
import logo7 from '../assets/logo_kasa_7.png';
import logo8 from '../assets/logo_kasa_8.png';

function Footer() {

    return (
        <div className='component_footer'>
            <div>
                <img src={logo5} alt='première lettre'/>
                <img src={logo6} alt='deuxième lettre'/>
                <img src={logo7} alt='troisième lettre'/>
                <img src={logo8} alt='quatrième lettre'/>
            </div>
            <p className=''>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer;