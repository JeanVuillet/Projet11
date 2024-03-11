import { useParams } from 'react-router-dom';
import AppartData from './logements.json';
import { Deroulant } from './components/deroulant';

let data=[];
data=AppartData;
function Appartement(){
    let { id } = useParams();
 let appartement=data.find((element)=>element.id===id)
 let tags=appartement.tags.map((tag)=>(<div key={tag}>{tag}</div>))
    return(
        <>
       <img src={appartement.cover}></img>

        <div>{appartement.title}</div>
        <div>
            <div>{appartement.host.name}</div>
            <img src={appartement.host.picture}></img>
       
        </div>
        <div>{tags}</div>
        <div className='bottom'>
           
           <Deroulant title='Equipements' list={appartement.equipments}/>
           <Deroulant title='Description' list={appartement.description}/>
         

        </div>
        </>
    )
}
export default Appartement