import './index.scss';
import { Link } from 'react-router-dom';

//Componentes
import Cabecalho from '../../components/cabecalho';


export default function App() {

  return (

    <div className="pagina-app pagina">

      <Cabecalho titulo='REACT JS' />


      {/* Estudos */}
      <section className='secao'>
        <h1>Tópicos de Estudo</h1>
        <Link to='/contato'>
          <a>Página de Contato</a>
        </Link>
        <br />

        <Link to='/eventos'>
          <a>Estudando Eventos</a>
        </Link>
        <br />

        <Link to='/varestado'>
          <a>Aprendendo Variáveis de Estado</a>
        </Link>
        <br />

        <Link to='/comps'>
          <a>Estudando Componentes</a>
        </Link>
        <br />

        <Link to='/renderizacao'>
          <a>Renderização Condicional</a>
        </Link>
        <br />

        <Link to='/efeito'>
          <a>Estudos sobre Efeitos</a>
        </Link>
        <br />

        <Link to='/api'>
          <a>Incluindo APIs no Site</a>
        </Link>
        <br />
      </section>


      {/* Prática */}
      <section className='secao'>
        <h1>Botando tudo em prática</h1>

        <Link to='/praticaFormulario'>
          <a>Formulário de Inscrição</a>
        </Link>
        <br />
      </section>


      {/* Site da Feira de Profissões */}
      <section className='secao'>
        <h1>Feira do Frei</h1>

        <Link to='/rodape'>
          <a>Rodapé da Feira</a>
        </Link>
        <br />

        <Link to='/faq'>
          <a>FAQ da Feira</a>
        </Link>
        <br />
      </section>

    </div>
  );
}
