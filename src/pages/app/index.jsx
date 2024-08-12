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

        <input type="text" placeholder='Digite aqui'/>
        <br/>

        <select>
          <option>Item 1</option>
          <option>Item 2</option>
        </select>
        <br/>

        <button>Clique Aqui</button>
        <br/>

        <Link to='/contato'>
          <a>Contato</a>
        </Link>
        <br/>

        <Link to='/eventos'>
          <a>Eventos</a>
        </Link>
        <br/>

        <Link to='/varestado'>
          <a>Variáveis de Estado</a>
        </Link>
      </section>


    </div>
  );
}