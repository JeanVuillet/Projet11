import { Link } from "react-router-dom";
import Home from "../Home/Home";

export function ErrorDiv(){

    return(
        <>
        <div>404</div>
        <div>Oups! La page que vous demandez n'existe pas.</div>
        <Link to='/'>Retourner sur la page d’accueil</Link>
        </>
    )

}