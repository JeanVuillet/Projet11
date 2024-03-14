
import './MainHeader.scss'
import { NavLink } from "react-router-dom"



function MainHeader(){

    return(
        <>
        < header className='header'>
<img src='/src/assets/logo.png' alt='logo' className='logo'></img>

<nav className="navMenu">
    <NavLink to={'/'} className={'navLink'}>Accueil</NavLink>
    <NavLink to={'/Apropos'} className={'navLink'}>A Propos</NavLink>
</nav>
</header>
</>
    )
}
export default MainHeader