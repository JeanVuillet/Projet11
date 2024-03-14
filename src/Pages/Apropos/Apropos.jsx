 

 import './Apropos.scss'
 import { Layer } from '../../components/Layer/Layer';
 import"../../components/Layer/Layer.scss"

 import data from "../../data/Apropos.json";
 import { Banner } from '../../components/banner/banner';
 

 function Apropos(){

    return(
        <>
    <Banner number={2} visible={'none'}></Banner>
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