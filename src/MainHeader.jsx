
import { Link } from "react-router-dom"
import './Sass/MainHeader.scss'
import { NavLink } from "react-router-dom"



function MainHeader(){

    return(
        <>
        <header>
<img src='/src/assets/logo.png' alt='logo' className='logo'></img>

<nav className="navMenu">
    <Link to={'/'}>Accueil</Link>
    <Link to={'/Apropos'}>A Propos</Link>
</nav>
</header>
</>
    )
}
export default MainHeader