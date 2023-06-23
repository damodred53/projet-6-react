import './logement.css';
import dataHouse from '../../data';
import Host from '../../components/Host';
import Card from '../../components/Card';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';



function Logement({ title, e }) {

    const {id} = useParams();
    const researchItem = dataHouse.find((item) => item.id === id);
    
    return (
      <div>

        <div className='title_host'>
        {researchItem.title}
        {researchItem.host.name}
        <img src={researchItem.host.picture} alt={researchItem.title}></img>
        </div>

        <div className='location_rating_tags'>
            {researchItem.location}
            {researchItem.rating}
            {researchItem.tags}
        </div>

        <div className='logements_collapses'>
            <div className="description_collapse_logement">
                <Collapse 
                titre='Description'
                paragraphe={researchItem.description}/>
            </div>

            <div className="equipements_collapse_logement">
                <Collapse 
                titre='Équipements'
                paragraphe={researchItem.equipments}/>
            </div>
        </div>
        
         
        
      </div>
    );
  }
  
  export default Logement;