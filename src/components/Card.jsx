import dataHouse from "../data";

 function Card() {
     
    return(
        dataHouse.map((e,id, index) => 
    (
        <div className="card_logement" key={`${id}-${index}`} >  
        
            <div className="image_background_card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6)), url(${e.cover})` }}   alt={e.title} key={`${id}-${index}`} />
           
            <p className="text_card">{e.title}</p> 
        </div>   
    )))
          
}
export default Card;
