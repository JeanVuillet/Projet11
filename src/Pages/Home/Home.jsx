
import AppartData from '../../logements.json'
import './Home.scss';
import { NavLink } from 'react-router-dom';

let Data=[];
console.log(Data[1]);
Data=AppartData;
 function Home(){

   let newData=Data.map((element)=>(
    <div key={element.id} className='appart'>
              <NavLink to={`/appartement/${element.id}`}>
      
        <img src={element.cover} className='appartImg'>
        </img>
        <div className='appartTitle'>{element.title}</div>
        </NavLink>
   </div>
   ))
    return(
       
       <div className='allPage'>
       <div className='pageHeader'>
    <img src='/src/assets/imgHeader1.jpeg' alt='image header' className='imgHeader1'></img>
    <div className='headerMessage'>Chez vous, partout et ailleurs</div>
       </div>
       
        <div className='mainDiv'>
        {newData} 
        </div>

        </div>
      
    )
}

export default Home;

