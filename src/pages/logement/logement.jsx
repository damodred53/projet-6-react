import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dataHouse from '../../data';
import Collapse from '../../components/Collapse';
import Étoiles from '../../components/Étoiles';
import Carousel from '../../components/Carousel';
import './logement.css';

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  let researchItem;

  useEffect(() => {
    if (!researchItem) navigate('/*');
  }, [researchItem, navigate]);

  try {
    researchItem = dataHouse.find((item) => item.id === id);
    if (!researchItem) {
      throw new Error();
    }
  } catch (error) {
    return null;
  }

  return (
    <div>
      <div>
        <Carousel item={researchItem.pictures} />
      </div>

      <div>
        <div className='title_host'>
          <div className='title_location'>
            <h1>{researchItem.title}</h1>
            <div className='item_location'>
              <strong>{researchItem.location}</strong>
            </div>
          </div>

          <div className='name_picture'>
            <strong>{researchItem.host.name}</strong>
            <img
              className='picture_logement'
              src={researchItem.host.picture}
              alt={researchItem.title}
            ></img>
          </div>
        </div>

        <div className='rating_tags'>
          <div className='item_tags'>
            {researchItem.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
          <div className='item_rating'>
            <Étoiles starsfull={researchItem.rating} />
          </div>
        </div>




        <div className='new_bar'>
          <div className='new_item_rating'>
            <Étoiles starsfull={researchItem.rating} />
          </div>
          <div className='new_name_picture'>
            <p className='new_name'>{researchItem.host.name}</p>
            <img
              className='new_picture_logement'
              src={researchItem.host.picture}
              alt={researchItem.title}
            ></img>
          </div>
        </div>




        <div className='logements_collapses'>
          <div className='description_collapse_logement'>
            <Collapse titre='Description' paragraphe={researchItem.description} />
          </div>

          <div className='equipements_collapse_logement'>
            <Collapse titre='Équipements' paragraphe={researchItem.equipments} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logement;
