import { useParams } from "react-router-dom";
import AppartData from "../../data/logements.json";
import { Layer } from "../../components/Layer/Layer";
import { Tag } from "../../components/Tag/tag";
import "./Appartement.scss";
import { StarMaker } from "../../components/starMaker";
import { Caroussel } from "../../components/caroussel/caroussel.jsx";

let data = [];
data = AppartData;
function Appartement() {
  let { id } = useParams();
  let appartement = data.find((element) => element.id === id);
  let tags = appartement.tags.map((tag) => (
    <Tag className="tagContent" content={tag} key={tag}></Tag>
  ));
  return (
    <>
      <div className="main">
      <Caroussel appartement={appartement}/>

        <div className="appartTitle">{appartement.title}</div>
        <div className="appartLocation">{appartement.location}</div>
        <div className="proprioDiv">
          <div className="proprioName">{appartement.host.name}</div>
          <img className="imgProprio" src={appartement.host.picture}></img>
        </div>

        <div className="starTag">
  
        <div className="tags">{tags}</div>
        <div className="starDiv">
        
        <StarMaker number={appartement.rating} />
      </div>
        </div>
        <div className="bottom">
          <Layer
            className="Layer"
            title="Description"
            list={appartement.description}
          />
          <Layer
            className="Layer"
            title="Equipements"
            list={appartement.equipments}
          />
        </div>
      </div>
    </>
  );
}
export default Appartement;
