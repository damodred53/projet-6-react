import './about.css';
import IMG_2 from '../../assets/IMG_2.png';
import Collapse from '../../components/Collapse';
import dataCollapse from "../../data_about";



function About() {
    return(
        <div>
            <img className='picture_about' src={IMG_2} alt='paysage de vallée'/>
            <div className="liste_about"> 
                {dataCollapse.map(({titre,paragraphe,index, id, handleClick}) => (
                    <Collapse 
                    key={`${titre}-${paragraphe}-${index}`}
                    titre = {titre}
                    paragraphe = {paragraphe}
                    index = {index}
                    id = {id}
                    handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    )
}
export default About;