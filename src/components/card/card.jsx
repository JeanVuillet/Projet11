import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

Card.propTypes = {
    element: PropTypes.shape({
      id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
     
    }).isRequired,
  };


  
 export function Card({element}){


   return( 
   <div key={element.id} className='appart'>
   <NavLink to={`/appartement/${element.id}`}>

<img src={element.cover} className='appartImg'>
</img>
<div className='appartTitle'>{element.title}</div>
</NavLink>
</div>)

}
