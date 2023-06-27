import derouleur from "../assets/derouleur.png";
import { useState} from "react";

function Collapse({ titre, paragraphe, id }) {
 
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);

 

  function handleClick() {

    setCount(count +1);
    setSelected(!selected);
  }

  return (
    <li className="listing_about">
      <div className="part_list_about">
        <h2 className="title_about">{titre}</h2>
        <img
          className={`icon_about ${selected  ? 'active' : ''} ${!selected && count>0 ? 'inactive':""}`}
          id={id}
          src={derouleur}
          alt="derouleur"
          onClick={handleClick}
        />
      </div>
      <div className={`div_about_supp ${!selected && count>0 ? 'closing_animation' : ''}`}>
        {selected && (
          <div className="div_about">
            {Array.isArray(paragraphe) ? (
              paragraphe.map((paragraph, index) => (
                <p
                  id={id}
                  key={index}
                  className={`paragraphe_about ${Array.isArray(paragraphe) ? "multielement_about" : ''}`}
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p
                id={id}
                className={`paragraphe_about onlyoneelement_about ${!selected ? 'closing_animation' : ''}`}
              >
                {paragraphe}
              </p>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default Collapse;
