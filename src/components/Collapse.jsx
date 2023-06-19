import derouleur from "../assets/derouleur.png";
import { useState } from "react";





function Collapse({titre, paragraphe, index,id}) {
const [selected, setSelected] = useState(true);

    
function handleClick() {
    console.log(selected)
    
    if (selected === true) {
      const paragraphs = document.querySelectorAll('.paragraphe_about');
      paragraphs.forEach((paragraph) => {
        
       if (paragraph.id == id){
        paragraph.style.display = 'block';
        setSelected(false)
    }});
    } else {
        
      const paragraphs = document.querySelectorAll('.paragraphe_about');
      paragraphs.forEach((paragraph, index) => {
        paragraph.style.display = 'none';
        setSelected(true);
      });
    }
  }

  
    
return (
    
        <li className="listing_about">
            <div  className="part_list_about">
                <h2 className="title_about">{titre}</h2>
                <img className="icon_about" id={id}  src={derouleur} alt="derouleur" onClick={() => handleClick({id})}/>
            </div>
                <p id={id} className="paragraphe_about">{paragraphe}</p>  
        </li>
    
    )
}
export default Collapse;

