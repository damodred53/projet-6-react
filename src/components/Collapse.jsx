import React, { useState, useEffect, useRef } from "react";
import derouleur from "../assets/derouleur.png";

function Collapse({ titre, paragraphe, id }) {
  const ref = useRef();
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);
  const [refHeight, setrefHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setrefHeight(ref.current.scrollHeight);
      const divHeight = document.querySelector('.div_about').style.height = refHeight +'px';
      console.log(divHeight.height)
    /*divHeight.style.height = refHeight;*/
    }
  }, [selected, refHeight]);


   

  function handleClick(event) {
    

    setSelected(!selected);
    
  }

  

  return (
    <div className="listing_about">
      <div className="part_list_about">
        <h2 className="title_about">{titre}</h2>
        <img
          className={`icon_about ${selected ? 'active' : ''} ${!selected && count > 0 ? 'inactive' : ''}`}
          id={id}
          src={derouleur}
          alt="derouleur"
          onClick={(event) => handleClick(refHeight)}
        />
      </div>
      <div className={`div_about_supp ${!selected && count > 0 ? 'closing_animation' : ''}`}>
        {selected && (
          <div className="div_about paragraphe_about" >
            {paragraphe && (
              <p id={id} className="multielement_about" ref={ref}>
                {paragraphe}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Collapse;
