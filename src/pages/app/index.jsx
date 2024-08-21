import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

export default function App() {
  return (
    <div className="pagina-app pagina">

      <Cabecalho titulo='REACT JS'/>

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
        <br />

        <Link to='/comps'>
          <a>Estudo de Componentes</a>
        </Link>
        <br/>
      </section>

    </div>
  );
}