import dataHouse from "../data";

 function Card() {
    
    
    

     
    return(
        dataHouse.map((e,id, index) => 
    (
        <div className="card_logement" key={`${id}-${index}`} >      
            <img className="image_background_card" src={e.cover} alt={e.title} key={`${id}-${index}`}/>
            <p className="text_card">{e.title}</p>
        </div>   
    )))
          
}
export default Card;
