import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { Contador } from '../../components/contador';


export default function Comps () {
    return (
        <div className='pagina-comps pagina'>
            <Cabecalho titulo='Componentes'/>

            <div className='secao'>
                <h1>Transformando o Contador em um Componente</h1>

                <Contador/>
            </div>
        </div>
    )
}