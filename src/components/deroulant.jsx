import { useState } from "react";

export function Deroulant({title, list}){
let [display,setDisplay]=useState('flex');

function DisplaySeter(){
setDisplay((display=='flex')? 'none':'flex');
}
    let content;
if (list.map){
  content=list.map((element,index)=>(<div key={index}>{element}</div>))}
    else{ content=list;}
    return(
<div>
    <h1 onClick={DisplaySeter}>{title}</h1>
    <ul className="content" style={{display:display}}>
 {content}
    </ul>
</div>
    )
}