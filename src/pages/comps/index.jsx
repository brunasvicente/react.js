import './index.scss';
import { useState } from 'react';

//Componentes
import Cabecalho from '../../components/cabecalho';
import ItemMeta from '../../components/itemMeta';
import { Contador } from '../../components/contador';
import { ItemPlano } from '../../components/itemPlano';
import { CartaoFilme } from '../../components/cartaoFilme';


export default function Comps() {
    //Catálogo de Filmes
    const [nomeFilme, setNomeFilme] = useState('')
    const [classificacao, setClassificacao] = useState('')
    const [urlFilme, setUrlFilme] = useState('')
    const [listaFilme, setListaFilme] = useState([])

    function adicionarFilme() {
        if (nomeFilme == '' || classificacao == '' || urlFilme == '') {
            alert('Preencha Todos os Campos')
            return
        }

        let filme = {
            nome: nomeFilme,
            classificacao: classificacao,
            urlCapa: urlFilme
        }

        setListaFilme([...listaFilme, filme])
        setNomeFilme('')
        setClassificacao('')
        setUrlFilme('')
    }


    //Vetor de Planos
    const [plano, setPlano] = useState('')
    const [situacao, setSituacao] = useState('')
    const [cor, setCor] = useState('')
    const [listaPlanos, setListaPlanos] = useState([])

    function adicionarPlano() {
        let novoPlano = {
            titulo: plano,
            tempo: situacao,
            tema: cor
        }

        setListaPlanos([...listaPlanos, novoPlano])
        setPlano('')
        setSituacao('')
        setCor('')
    }


    //Plano de Metas
    const [novaMeta, setNovaMeta] = useState('')
    const [listaMetas, setListaMetas] = useState([])
    const [editando, setEditando] = useState(-1)

    function adicionarMeta() {
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

    function teclaApertada(t) {
        if (t.key == 'Enter') {
            adicionarMeta()
        }
    }

    function removerMeta(pos) {
        listaMetas.splice(pos, 1)
        setListaMetas([...listaMetas])
    }

    function alterarMeta(pos) {
        setNovaMeta(listaMetas[pos])
        setEditando(pos)
    }


    return (
        <div className='pagina-comps pagina'>
            <Cabecalho titulo='Componentes' />

            <div className='secao filmes'>
                <h1>Catálogo de Filmes</h1>

                <div className='entradas'>
                    <input type="text" placeholder='Nome do filme' value={nomeFilme} onChange={a => setNomeFilme(a.target.value)}/>
                    <input type="text" placeholder='Classificação' value={classificacao} onChange={a => setClassificacao(a.target.value)}/>
                    <input type="text" placeholder='URL da Capa' value={urlFilme} onChange={a => setUrlFilme(a.target.value)}/>
                    <button onClick={adicionarFilme}>Adicionar</button>
                </div>

                <div className='lista'>
                    {listaFilme.map(item =>
                        <CartaoFilme item={item}/>
                    )}
                </div>
            </div>


            <div className='secao'>
                <h1>Transformando o Contador em um Componente</h1>
                <Contador />
            </div>


            <div className='secao planos'>
                <h1>Meus planos atuais</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Meu plano aqui' value={plano} onChange={(a) => setPlano(a.target.value)} />
                    <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={(a) => setSituacao(a.target.value)} />
                    <input type="text" placeholder='Cor de identificação' value={cor} onChange={(a) => setCor(a.target.value)} />
                    <button onClick={adicionarPlano}>Adicionar Plano</button>
                </div>

                <div className='lista'>
                    {listaPlanos.map((item, pos) =>
                        <ItemPlano item={item} />
                    )}
                </div>
            </div>


            <div className='secao metas'>
                <h1>Metas para os próximos 5 anos</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={(a) => setNovaMeta(a.target.value)} />
                    <button onClick={adicionarMeta}>Adicionar</button>

                    <ul>
                        {listaMetas.map((item, pos) =>
                            <ItemMeta item={item} pos={pos} alterarMeta={alterarMeta} removerMeta={removerMeta} />
                        )}
                    </ul>
                </div>
            </div>


        </div>
    )
}