import "./Apropos.scss";
import { Layer } from "../../components/Layer/Layer";
import "../../components/Layer/Layer.scss";

import data from "../../data/Apropos.json";
import { Banner } from "../../components/banner/banner";

function Apropos() {
  return (
    <div className="allPage">
      <Banner number={2} color={"transparent"}></Banner>
      <div className="aProposDiv__layers">
        <Layer
          title={"Fiabilité"}
          list={data.Fiabilité}
          className={"large"}
        ></Layer>
        <Layer
          title={"Respect"}
          list={data.Fiabilité}
          className={"large"}
        ></Layer>
        <Layer
          title={"Service"}
          list={data.Fiabilité}
          className={"large"}
        ></Layer>
        <Layer
          title={"Sécurité"}
          list={data.Fiabilité}
          className={"large"}
        ></Layer>
      </div>
    </div>
  );
}

export default Apropos;
