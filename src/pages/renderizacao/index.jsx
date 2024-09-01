import './index.scss';
import { useState } from 'react';

//Componentes
import Cabecalho from '../../components/cabecalho';
import { CartaoFilme } from '../../components/cartaoFilme';


export default function RenderizacaoCondicional() {
    //Catálogo de Filmes
    const [nomeFilme, setNomeFilme] = useState('')
    const [classificacao, setClassificacao] = useState('')
    const [urlFilme, setUrlFilme] = useState('')
    const [estreia, setEstreia] = useState('')
    const [destaque, setDestaque] = useState(false)
    const [listaFilme, setListaFilme] = useState([])

    function adicionarFilme() {
        if (nomeFilme == '' || classificacao == '' || urlFilme == '') {
            alert('Preencha Todos os Campos')
            return
        }

        let filme = {
            nome: nomeFilme,
            classificacao: classificacao,
            urlCapa: urlFilme,
            estreia: estreia,
            destaque: destaque
        }

        setListaFilme([...listaFilme, filme])
        setNomeFilme('')
        setClassificacao('')
        setUrlFilme('')
        setEstreia('')
        setDestaque(false)
    }

    //Biscoito da Sorte
    const [biscoitoSorte, setBiscoitoSorte] = useState(false)

    function abrirFechar() {
        setBiscoitoSorte(!biscoitoSorte)
    }

    //Inscrição de Usuário
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function cadastrar() {
    }

    return(
        <div className='pagina-renderizacao-condicional pagina'>
            <Cabecalho titulo="React JS | Renderização Condicional"/>

            <div className='secao inscricao'>
                <h1>Formulário de Inscrição de Usuário</h1>

                <input type="text" placeholder='Nome' value={nome} onChange={a => setNome(a.target.value)}/>
                <input type="text" placeholder='Email' value={email} onChange={a => setEmail(a.target.value)}/>
                <input type="password" placeholder='Senha' value={senha} onChange={a => setSenha(a.target.value)}/>
                <button onClick={cadastrar}>Cadastrar-se</button>
            </div>

            <div className='secao filmes'>
                <h1>Catálogo de Filmes</h1>

                <div className='entradas'>
                    <input type="text" placeholder='Nome do filme' value={nomeFilme} onChange={a => setNomeFilme(a.target.value)} />
                    <input type="text" placeholder='Classificação' value={classificacao} onChange={a => setClassificacao(a.target.value)} />
                    <input type="text" placeholder='URL da Capa' value={urlFilme} onChange={a => setUrlFilme(a.target.value)} />
                    <input type="text" placeholder='Estreia do Filme' value={estreia} onChange={a => setEstreia(a.target.value)} />

                    <div>
                        <input type="checkbox" value={destaque} onChange={a => setDestaque(a.target.checked)} />
                        <p>Destaque</p>
                    </div>

                    <button onClick={adicionarFilme}>Adicionar</button>
                </div>

                <div className='lista'>
                    {listaFilme.map(item =>
                        <CartaoFilme item={item} />
                    )}
                </div>
            </div>

            <div className='secao biscoito'>
                <h1>Biscoito da Sorte</h1>
                <button onClick={abrirFechar}>
                    {biscoitoSorte == true ? 'Fechar' : 'Abrir'}
                </button>

                {biscoitoSorte == true && 
                    <p className='msg-biscoito'>"Sempre haverá pessoas melhores e piores em habilidades diferentes. Avance e ajude."</p>
                }
            </div>
        </div>
    )
}
