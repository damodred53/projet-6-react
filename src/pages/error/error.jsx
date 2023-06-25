import './error.css';
import { Link } from 'react-router-dom';

function Error() {
    return(
        <div className='div_error'> 
            <h1 className='title_error'>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className='underline_stop'><p className='paragraph_error'>Retourner sur la page d'accueil</p></Link>
        </div>
    )
}
export default Error;