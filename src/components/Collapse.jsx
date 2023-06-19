import derouleur from "../assets/derouleur.png";
import { useState } from "react";


function Collapse({titre, paragraphe, index,id}) {
const [selected, setSelected] = useState(false);

    
function handleClick() {
    setSelected(!selected);
  }

  
    
return (
    
        <li className="listing_about">
            <div  className="part_list_about">
                <h2 className="title_about">{titre}</h2>
                <img className={`icon_about ${selected ? 'active' : ''}`} id={id}  src={derouleur} alt="derouleur" onClick={handleClick}/>
            </div>
            <div className={ selected ?  "div_about" : "null"}>
            {selected && <p id={id} className="paragraphe_about" >{paragraphe}</p>}
            </div> 
        </li>
    
    )
}


export default Collapse;




