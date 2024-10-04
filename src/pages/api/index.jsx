import './index.scss';
import { useState } from 'react';
import axios from 'axios';

import Cabecalho from '../../components/cabecalho';


export default function Api() {
    //API do Correio
    const [cep, setCep] = useState('')
    const [infoCep, setInfoCep] = useState('')

    async function buscarCep() {
        let url = `http://viacep.com.br/ws/${cep}/json/`

        let response = await axios.get(url)
        let dados = response.data

        let msg = `${dados.logradouro}, ${dados.bairro}. ${dados.localidade}/${dados.uf}`
        setInfoCep(msg)
    }

    //API Omdb
    const [filmeBusca, setFilmeBusca] = useState('')
    const [listaFilmes, setListaFilmes] = useState([])

    async function buscarFilme() {
        let url = `http://www.omdbapi.com?apikey=d43a5114&s=${filmeBusca}`
        let resp = await axios.get(url)
        let dados = resp.data

        let filmesEncontrados = dados.Search
        setListaFilmes(filmesEncontrados)
    }

    return (
        <div className='pagina-api pagina'>
            <Cabecalho titulo='React JS | Chamando APIs' />

            <div className='secao omdb'>
                <h1>API Omdb</h1>

                <div className='entradas'>
                    <input type="text" placeholder='Nome do Filme' value={filmeBusca} onChange={a => setFilmeBusca(a.target.value)} />
                    <button onClick={buscarFilme}>Buscar</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Filme</th>
                            <th>Ano</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listaFilmes.map(item =>
                            <tr>
                                <td>{item.imdbID}</td>
                                <td>{item.Title}</td>
                                <td>{item.Year}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className='secao'>
                <h1>API do correio</h1>

                <div>
                    <input type="text" placeholder='Digite o CEP' value={cep} onChange={a => setCep(a.target.value)} />
                    <button onClick={buscarCep}>Buscar</button>
                </div>

                <p> {infoCep} </p>

            </div>
        </div>
    )
}
