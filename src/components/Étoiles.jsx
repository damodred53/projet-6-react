import star_active from "../assets/star_active.png";
import star_inactive from "../assets/star_inactive.png";

const Étoiles = ({ starsfull, index }) => {
    const étoiles = [];
  
    for (let i = 1; i <= 5; i++) {
      if (i <= starsfull) {
        étoiles.push(<img src={star_active} key={`${index}-${i}`} alt="étoile" />);
      } else {
        étoiles.push(<img src={star_inactive} key={`${index}-${i}`} alt="étoile" />);
      }
    }
  
    return étoiles;
  };
  
  export default Étoiles;