import React, { useState, useEffect, useRef } from "react";
import derouleur from "../assets/derouleur.png";

function Collapse({ titre, paragraphe, id }) {
  const ref = useRef();
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);
  const [refHeight, setRefHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setRefHeight(ref.current.scrollHeight);
    }
  }, [selected]);

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
          <div className="div_about paragraphe_about">
            {Array.isArray(paragraphe) ? (
              paragraphe.map((paragraph, index) => (
                <p
                  id={id}
                  key={index}
                  className={`paragraphe_about ${Array.isArray(paragraphe) ? "multielement_about" : ''}`}
                  ref={ref}
                  style={selected ? { height: refHeight + "px" } : { height: "0px" }}
                >
                  
                    {paragraph}
                  
                </p>
              ))
            ) : (
              <p
                id={id}
                className={`paragraphe_about onlyoneelement_about ${!selected ? 'closing_animation' : ''}`}
                ref={ref}
                style={selected ? { height: refHeight + "px" } : { height: "0px" }}
              >
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
