
import { useState } from "react"

export function Caroussel ({appartement }){
let [position, setPosition]=useState(1)
function goBack(){
   setPosition( position===0? appartement.pictures.length -1 :position -1);
   console.log(position)
}
function goForward(){
    setPosition( position===appartement.pictures.length -1? 0:position +1);
    console.log(position)
 }

return(
    <div>
       <svg
       onClick={goBack}
      className="arrow"
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${45}deg)`, transition: 'transform 0.3s' , width:'5rem',height:'5rem', backgroundColor:'red'}}
    ></svg>
    <img src={appartement.pictures[position]}></img>
    <svg
     onClick={goForward}
      className="arrow"
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${-45}deg)`, transition: 'transform 0.3s' ,width:'5rem',height:'5rem', backgroundColor:'blue'}}
    ></svg>
    </div>
)

}