 

 import './Apropos.scss'
 import { Layer } from '../../components/Layer/Layer';
 import"../../components/Layer/Layer.scss"

 import data from "../../data/Apropos.json";
 

 function Apropos(){

    return(
        <>
        <div className="aProposDiv">
            <img   src='/src/assets/imgHeader2.jpeg'  className="aProposDiv__img"/>
        </div>
        <div className='aProposDiv__layers'>
      <Layer title={'Fiabilité'} list={data.Fiabilité} className={'fiabilité'}></Layer>
      <Layer title={'Respect'} list={data.Fiabilité} className={'respect'}></Layer>
      <Layer title={'Service'} list={data.Fiabilité} className={'service'}></Layer>
      <Layer title={'Sécurité'} list={data.Fiabilité} className={'securite'}></Layer>
        </div>
        </>
    )
 }

 export default Apropos;