import './logement.css';
import dataHouse from '../../data';
import Host from '../../components/Host';
import Card from '../../components/Card';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Étoiles from '../../components/Étoiles';
import Carousel from '../../components/Carousel';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Logement() {
  const {id} = useParams();
  const navigate = useNavigate();
  let researchItem

    
  
  useEffect(() => {
    if (!researchItem)
    navigate('/*');
  },[researchItem])
      
  try {
    researchItem = dataHouse.find((item) => item.id === id);
  
    
      if (!researchItem) {
        throw new Error('Logement introuvable');
      }
      
     // Ajoutez researchItem comme dépendance du useEffect
  
  } catch (error) {
    console.error("Erreur lors de la recherche du logement :", error);
    
    return null;
  }

  
  console.log(researchItem);
  

  
  
     

    /*let researchItem;
    useEffect(() => {
      try {
        researchItem = dataHouse.find((item) => item.id === id);
  
        if (!researchItem) {
          throw new Error('Logement introuvable');
        }
  
        console.log(researchItem);
      } catch (error) {
        console.error("Erreur lors de la recherche du logement :", error);
        navigate('/*');
        return null;
      }
    }, []);*/
    
    
    
   
      
     
        
    
  
  

    
  
    
    
    return (
      <div>
        

        <div>
            <Carousel 
            item = {researchItem.pictures}/>
        </div>
      


      <div>
        <div className='title_host'>
          <div className='title_location'>

       

            <h1>{researchItem.title}</h1>
            <div className="item_location"><strong>{researchItem.location}</strong></div>
          </div>

          <div className='name_picture'>
            <strong>{researchItem.host.name}</strong>
            <img className='picture_logement' src={researchItem.host.picture} alt={researchItem.title}></img>
          </div>
        </div>


        <div>
          
        </div>

        <div className='rating_tags'>
          <div className="item_tags">{researchItem.tags.map((tag) => (
            <p>{tag}</p>
          ))}</div>
          <div className="item_rating">
            <Étoiles starsfull={researchItem.rating} />
          </div>
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
      </div>
    );
  }
  
  export default Logement;