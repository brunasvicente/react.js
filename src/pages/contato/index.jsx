import './index.scss';
import { Link } from 'react-router-dom';

export default function Contato() {
    return (
        <div className='pagina-contato'>
            <Link to='/'>
                <img className='botao' src="./assets/images/959160.png" alt='Seta de Voltar'/>
            </Link>

            <h1>Contato</h1>
        </div>
    )
}