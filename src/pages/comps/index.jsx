import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho';
import ItemMeta from '../../components/itemMeta';
import { Contador } from '../../components/contador';


export default function Comps () {
    const [novaMeta, setNovaMeta] = useState('')
    const [listaMetas, setListaMetas] = useState([])
    const [editando, setEditando] = useState(-1)

    function adicionarMeta () {
        if (novaMeta != '') {
    
            if (editando == -1) {
                setListaMetas([...listaMetas, novaMeta])
                setNovaMeta('')
            } else {
                listaMetas[editando] = novaMeta
                setListaMetas([...listaMetas])
                setNovaMeta('')
                setEditando(-1)
            }
    
        }
    }
    
    function teclaApertada (t) {
        if (t.key == 'Enter') {
            adicionarMeta()
        }
    }
    
    function removerMeta (pos) {
        listaMetas.splice(pos, 1)
        setListaMetas([...listaMetas])
    }
    
    function alterarMeta (pos) {
        setNovaMeta(listaMetas[pos])
        setEditando(pos)
    }


    return (
        <div className='pagina-comps pagina'>
            <Cabecalho titulo='Componentes'/>

            <div className='secao'>
                <h1>Transformando o Contador em um Componente</h1>

                <Contador/>
            </div>

            
            <div className='secao metas'>
                <h1>Metas para os próximos 5 anos</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={ (a) => setNovaMeta(a.target.value) }/>
                    <button onClick={adicionarMeta}>Adicionar</button>

                    <ul>
                        {listaMetas.map((item, pos) => 
                            <ItemMeta item={item} pos={pos} alterarMeta={alterarMeta} removerMeta={removerMeta}/>
                        )}
                    </ul>
                </div>
            </div>


        </div>
    )
}