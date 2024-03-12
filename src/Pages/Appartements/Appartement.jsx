import { useParams } from 'react-router-dom';
import AppartData from '../../logements.json';
import { Deroulant } from '../../components/deroulant';
import { Tag } from '../../components/tag';
import'../../Sass/Appartement.scss'

let data=[];
data=AppartData;
function Appartement(){
    let { id } = useParams();
 let appartement=data.find((element)=>element.id===id)
 let tags=appartement.tags.map((tag)=>(<Tag className='tagContent' content = {tag} key={tag} ></Tag>))
    return(
        <>
        <main className='main'>
       <img className='appartImg' src={appartement.cover}></img>

        <div>{appartement.title}</div>
        <div className='proprioDiv'>
            <div className='toto'>{appartement.host.name}</div>
            <img className='imgProprio' src={appartement.host.picture}></img>
       
        </div>
        <div className='tags'>{tags}</div>
        <div className='bottom'>

           <Deroulant className='deroulant' title='Equipements' list={appartement.equipments}/>
           <Deroulant className='deroulant' title='Description' list={appartement.description}/>
           

        </div>

        </main>
        </>
    )
}
export default Appartement