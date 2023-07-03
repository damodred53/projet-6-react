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

  function handleClick() {
    setCount(count + 1)
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
          onClick={() => handleClick(refHeight)}
        />
      </div>
      <div className={`div_about_supp ${!selected  && count > 0 ? 'closing_animation' : ''}`}>
        {selected && (
          
            Array.isArray(paragraphe) ? (
              paragraphe.map((paragraph, index) => (
                <p 
                  id={id}
                  key={index}
                  className="multielement_about" 
                  ref={ref}
                  style={selected ? { height: refHeight.current + "px" } : { height: "0px" }}
                >
                  
                    {paragraph}
                  
                </p>
              ))
            ) : (
              <p
                id={id}
                className={` onlyoneelement_about `}
                ref={ref}
                style={{
                  height: selected ? `${refHeight+5}%` : "0px",
                 
                }}
              >
                {paragraphe}
              </p>
            )
          
        )}
      </div>
    </div>
  );
}

export default Collapse;
