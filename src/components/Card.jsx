import React from 'react';
import { Link } from 'react-router-dom';
import dataHouse from '../data';

function Card({ e }) {
  

  return (
    dataHouse.map((item, id, index) => (
      <Link to={`/logement/${item.id}`}  key={`${id}-${index}`}>
        <div className="card_logement">
          <div className="image_background_card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6)), url(${item.cover})` }} alt={item.title} />
          <p className="text_card">{item.title}</p>
        </div>
      </Link>
    ))
  );
}

export default Card;
