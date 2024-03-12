
import AppartData from '../../logements.json'
import '../../Sass/Home.scss'
import { Link } from 'react-router-dom';

let Data=[];
console.log(Data[1]);
Data=AppartData;
export function HomeMain(){

   let newData=Data.map((element)=>(
    <div key={element.id} className='appart'>
              <Link to={`/appartement/${element.id}`}>
      
        <img src={element.cover} className='appartImg'>
        </img>
        <div className='appartTitle'>{element.title}</div>
        </Link>
   </div>
   ))
    return(
        <div className='mainDiv'>
       
        {newData}
           
        </div>
    );
}

