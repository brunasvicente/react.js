import './index.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>

      <Link to='/contato'>
        <button>Contato</button>
      </Link>
    </div>
  );
}