import { useParams } from "react-router-dom";
import AppartData from "../../data/logements.json";
import { Layer } from "../../components/Layer/Layer";
import { Tag } from "../../components/Tag/tag";
import "./Appartement.scss";
import { StarMaker } from "../../components/starMaker";
import { Caroussel } from "../../components/caroussel/caroussel.jsx";
import { Error } from "../Error/Error.jsx";

let data = [];
data = AppartData;
function Appartement() {
  let { id } = useParams();
  let appartement = data.find((element) => element.id === id);

  if (!appartement) {
    return <Error />;
  } else {
    let tags = appartement.tags.map((tag) => (
      <Tag className="tagContent" content={tag} key={tag}></Tag>
    ));
    return (
      <>
        <div className="contain">
          <Caroussel appartement={appartement} />
          <div className="info">

            <div className="center">
            <div className="leftDiv">
              <div className="appartTitle">{appartement.title}</div>
              <div className="appartLocation">{appartement.location}</div>
              <div className="tagContainer">{tags}</div>
            </div>
            <div className="rightDiv">
              <div className="proprioDiv">
                <div className="proprioName">{appartement.host.name}</div>
                <img className="imgProprio" src={appartement.host.picture}></img>
        
              </div>
              <div className="starDiv">
                  <StarMaker number={appartement.rating} />
              </div>
            </div>
            </div>   
            <div className="bottom">
              <Layer
                className="small"
                title="Description"
                list={appartement.description}
              />
              <Layer
                className="small"
                title="Equipements"
                list={appartement.equipments}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Appartement;
