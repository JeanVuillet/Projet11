
import { Link } from "react-router-dom"


function MainHeader(){

    return(
        <>
        <header>
<img src='/src/assets/logo.png' alt='logo'></img>

<nav>
    <Link to={'/'}>Accueil</Link>
    <Link to={'/Apropos'}>A Propos</Link>
</nav>
</header>
</>
    )
}
export default MainHeader