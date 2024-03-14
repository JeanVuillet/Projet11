
import AppartData from '../../data/logements.json'
import './Home.scss';
import { NavLink } from 'react-router-dom';
import { Card } from '../../components/card/card';
import { Banner } from '../../components/banner/banner';

let Data=[];
console.log(Data[1]);
Data=AppartData;
 function Home(){

   let newData=Data.map((element)=>(
    <Card key={element.id} element={element}></Card>
   ))
    return(
       
       <div className='allPage'>
     <Banner number={1} visible={'flex'}/>
       
        <div className='mainDiv'>
        {newData} 
        </div>

        </div>
      
    )
}

export default Home;

