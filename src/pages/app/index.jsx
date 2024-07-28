import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">
      <header className='cabecalho'>
        <h1>Hello World!</h1>
      </header>

      <section className='secao'>
        <h1>Estudando ReactJS</h1>

        <input type="text" />
        <button>Clique Aqui</button>

        <Link to='/contato'>
          <button>Contato</button>
        </Link>
      </section>


    </div>
  );
}