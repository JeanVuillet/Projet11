import { NavLink } from "react-router-dom";
import './Error.scss';

export function ErrorDiv(){

    return(
        <>
        <div className="errorDiv">
        <div className="errorNumber">404</div>
        <div className="errorMessage">Oups! La page que vous demandez n'existe pas.</div>
        <NavLink  className='link'  to='/'>Retourner sur la page d’accueil</NavLink>
        </div>
        </>
    )

}