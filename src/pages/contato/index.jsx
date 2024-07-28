import './index.css';
import { Link } from 'react-router-dom';

export default function Contato() {
    return (
        <div className='pagina-contato'>
            <h1>Contato</h1>

            <Link to='/'>
                <img className='botao' src="./assets/images/959160.png" alt='Seta de Voltar'/>
            </Link>
        </div>
    )
}