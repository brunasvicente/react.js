import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho/index.jsx';

import { vendaIngresso } from '../../services/variavel-estado.js'

export default function Varestado() {
    //Vetor de Planos
    const [plano, setPlano] = useState('')
    const [situacao, setSituacao] = useState('')
    const [cor, setCor] = useState('')
    const [listaPlanos, setListaPlanos] = useState([])
    
    function adicionarPlano () {
            let novoPlano = {
                titulo: plano,
                tempo: situacao,
                tema: cor
            }
    
            setListaPlanos([listaPlanos, novoPlano])
            setPlano('')
            setSituacao('')
            setCor('')
    }


    //Vetor
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


    //Venda de Ingressos
    const [qntIng, setQntIng] = useState(0)
    const [meioIng, setMeioIng] = useState(0)
    const [cupom, setCupom] = useState('')
    const [totalIng, setTotalIng] = useState(0)

    function calcularIng () {
        let total = vendaIngresso(qntIng, meioIng, cupom)
        setTotalIng(total)
    }

    
    //Calculadora
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [op, setOp] = useState()
    const [resp, setResp] = useState(0)

    function calcular () {
        let resultado = 0

        if (op == '+') {
            resultado = Number(n1) + Number(n2)
        } if (op == '-') {
            resultado = Number(n1) - Number(n2)
        } if (op == 'x') {
            resultado = Number(n1) * Number(n2)
        } if (op == '/') {
            resultado = Number(n1) / Number(n2)
        }

        setResp(resultado)
    }


    //Contador
    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }


    //Variáveis
    const [titulo, setTitulo] = useState('Digite Algo')
    const [titulo2, setTitulo2] = useState('Escolha uma opção')
    const [marcouOpcaoS4, setMarcouOpcaoS4] = useState(false)
    const [ tituloS5, setTituloS5 ] = useState('Oie')
    const [ descricao, setDescricao ] = useState('Digite algo')


    return(
        <div className='pagina-varestado pagina'>

            <Cabecalho titulo='React JS | Variável de Estado'/>

            <div className='secao planos'>
                <h1>Meus planos atuais</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Meu plano aqui' value={plano} onChange={ (a) => setPlano(a.target.value) }/>
                    <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={ (a) => setSituacao(a.target.value) }/>
                    <input type="text" placeholder='Cor de identificação' value={cor} onChange={ (a) => setCor(a.target.value) }/>
                    <button onClick={adicionarPlano}>Adicionar Plano</button>
                </div>

                <div className='lista'>
                    {listaPlanos.map((item, pos) =>
                        <div className='plano' key={pos}>
                            <div className='cor' style={{backgroundColor: item.tema}}>&nbsp;</div>
                            <div>
                                <h1> {item.titulo} </h1>
                                <h2> {item.tempo} </h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            <div className='secao metas'>
                <h1>Metas para os próximos 5 anos</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={ (a) => setNovaMeta(a.target.value) }/>
                    <button onClick={adicionarMeta}>Adicionar</button>

                    <ul>
                        {listaMetas.map((item, pos) => 
                            <li key={pos}>
                                <i class="fa-regular fa-pen-to-square" onClick={() => alterarMeta(pos)}></i> &nbsp;
                                <i class="fa-solid fa-trash" onClick={() => removerMeta(pos)}></i> &nbsp;
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
            </div>


            <div className='secao ingresso'>

                <h1>Venda de Ingressos</h1>

                <div className='entrada'>
                    <div>
                        <label>Quantidade: </label>
                        <input type="text" value={qntIng} onChange={ (a) => setQntIng(a.target.value) }/>
                    </div>

                    <div>
                        <label>Meia Entrada: </label>
                        <input type="checkbox" checked={meioIng} onChange={ (a) => setMeioIng(a.target.checked) }/>
                    </div>

                    <div>
                        <label>Cupom: </label>
                        <input type="text" value={cupom} onChange={ (a) => setCupom(a.target.value) }/>
                    </div>

                    <div>
                        <label>&nbsp;</label>
                        <button onClick={calcularIng}>Calcular</button>
                    </div>

                    <hr />
                    <div>O total é R$ {totalIng.toFixed(2)}</div>
                </div>

            </div>


            <div className='secao'>

                <h1>Calculadora Simplizinha</h1>

                <div className='entradas'>
                    <input type="text" value={n1} onChange={ (a) => setN1(a.target.value) }/>

                    <select className='operacoes' value={op} onChange={(a) => setOp(a.target.value)}>
                        <option value={'+'}>+</option>
                        <option value={'-'}>-</option>
                        <option value={'x'}>x</option>
                        <option value={'/'}>/</option>
                    </select>

                    <input type="text" value={n2} onChange={ (a) => setN2(a.target.value) }/>
                    <div> = </div>
                    <div className='resp'> {resp} </div>
                </div>

                <button onClick={calcular}>Calcular</button>

            </div>


            <div className='secao'>
                <h1>Contador</h1>

                <div className='cont'>
                    <button onClick={aumentar}>+</button>
                    {contador}
                    <button onClick={diminuir}>-</button>
                </div>
            </div>


            <div className='secao'>
                <h1>{titulo}</h1>
                <input type="text" value={titulo} onChange={ (a) => setTitulo(a.target.value) }/>
            </div>


            <div className='secao'>
                <h1>{titulo2}</h1>
                <select onChange={ (a) => setTitulo2(a.target.value) }>
                    <option>Selecione</option>
                    <option>JavaScript</option>
                    <option>HTML / CSS</option>
                    <option>ReactJS</option>
                </select>
            </div>


            <div className='secao'>
                <h1>Programar é lindezinha? {marcouOpcaoS4 ? 'Sim' : 'Não'}</h1>
                <input type="checkbox" checked={marcouOpcaoS4} onChange={ (a) => setMarcouOpcaoS4(a.target.checked) }/> Programar é lindezinha?
            </div>


            <div className='secao'>
                <h1>{tituloS5}</h1>
                <input onChange={ (a) => setDescricao(a.target.value) } value={descricao} type="text"/>
                <button onClick={ () => setTituloS5(descricao) }>Alterar</button>
            </div>

        </div>
    )
}