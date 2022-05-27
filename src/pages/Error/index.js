import './error.css';
import {Link} from 'react-router-dom'

export default function Error(){
    return(
        <div className='conteiner-error'>
            <img src='/notfound.png' alt='Imagem de página não encontrada'></img>
            <h1>Página não encontrada!</h1>
            <Link to='/'>Voltar para página inicial!</Link>
        </div>
    )
}