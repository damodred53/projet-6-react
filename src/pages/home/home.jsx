import Card from '../../components/Card';
import './home.css';
import { Link } from 'react-router-dom';
import dataHouse from '../../data';


function Home() {

    

    return(
        <div>
            <div className='background_title'>
                <h1 className='home_title'>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='background_card'>
                
                    <div className='home_card'>
                        <Card />

                    </div>
                
            </div>
        </div>
    )
}
export default Home;