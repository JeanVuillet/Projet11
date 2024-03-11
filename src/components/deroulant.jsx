export function Deroulant({title, list}){
    let content;
if (list.map){
  content=list.map((element,index)=>(<div key={index}>{element}</div>))}
    else{ content=list;}
    return(
<div>
    <h1>{title}</h1>
    <ul>
 {content}
    </ul>
</div>
    )
}