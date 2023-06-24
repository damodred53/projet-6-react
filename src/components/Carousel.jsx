import dataHouse from "../data";
import flèche_précédent from "../assets/flèche_précédent.png";
import flèche_suivant from "../assets/flèche_suivant.png";

import React, { useState } from 'react';



const Carousel = ({item}) => {

     console.log(item.length)
const [index, setIndex] = useState(0);
const length = item.length;

const handlePrevious = () => {
const newIndex = index - 1;
setIndex(newIndex < 0 ? length - 1 : newIndex);
};

const handleNext = () => {
const newIndex = index + 1;
setIndex(newIndex >= length ? 0 : newIndex);
};

return (
        <div className="carousel">
            <div className="pictureBackground">
                
                    <div className="image_background_carousel" style={{ backgroundImage: ` url(${item[index]})` }} 
                        alt={dataHouse.title} 
                        key={`${index}`} >
                        <div className="buttons_logement">
                            <button className="button_logement" style={length === 1 ? { display: "none" } : {}}  onClick={handlePrevious}><img src={flèche_précédent} alt="photo précédente"/></button>
                            <button className="button_logement" style={length === 1 ? { display: "none" } : {}} onClick={handleNext}><img src={flèche_suivant} alt="photo suivante"/></button>
                            
                        </div>
                        <span className="index_picture_logement" style={length === 1 ? { display: "none" } : {}}>{index+1}/{item.length}</span>
                    </div>
                
            
                
            </div>
        </div>
        );
        };



export default Carousel;