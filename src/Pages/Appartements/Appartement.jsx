import { useParams } from "react-router-dom";
import AppartData from "../../data/logements.json";
import { Layer } from "../../components/Layer/Layer";
import { Tag } from "../../components/Tag/tag";
import "./Appartement.scss";
import { StarMaker } from "../../components/starMaker";

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
        <img className="appartImg" src={appartement.cover}></img>

        <div className="appartTitle">{appartement.title}</div>
        <div className="appartLocation">{appartement.location}</div>
        <div className="proprioDiv">
          <div className="proprioName">{appartement.host.name}</div>
          <img className="imgProprio" src={appartement.host.picture}></img>
        </div>
        <div className="starDiv">
        
          <StarMaker number={appartement.rating} />
        </div>
        <div className="tags">{tags}</div>
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
