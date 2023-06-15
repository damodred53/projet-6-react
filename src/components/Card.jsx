import dataHouse from "../data";

 function Card() {
     
    return(
        
            dataHouse.map((e,id) => (
        <p className="card_logement" key={`${id}`}>
            {e.title}  
        </p>)))
    
}
export default Card;
