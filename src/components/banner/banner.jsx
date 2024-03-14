
import './banner.scss';

export function Banner({number, visible}){

return(
<>
<div className='pageHeader'>
<img src={`/src/assets/imgHeader${number}.jpeg`} alt='image header' className={`imgHeader${number}`}></img>
<div className='headerMessage' style={{display: visible}}>Chez vous, partout et ailleurs</div>
</div>
</>
)
}