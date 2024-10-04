import { useState } from 'react'
import './index.scss'

import axios from 'axios'


export default function CadastrarAutonomo() {
    //Cadastrar Autônomo
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function salvar() {
        const paramCorpo = {
            "nome": nome,
            "email": email,
            "senha": senha
        }

        const url = 'http://localhost:5001/tcc/autonomo';
        let resp = await axios.post(url, paramCorpo);

        alert('Autônomo adicionado. Id: ' + resp.data.novoId);
    }

    //Consultar Autônomos
    const [consulta, setConsulta] = useState([]);

    async function buscar() {
        const url = 'http://localhost:5001/tcc/autonomo';
        let resp = await axios.get(url);
        setConsulta(resp.data);
    }


    return (
        <div className='pagina-api-autonomo'>

            <div className='cadastrar'>
                <h1> CADASTRAR AUTÔNOMO </h1>

                <div className='form'>
                    <div>
                        <label>Nome:</label>
                        <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type='text' value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>
                </div>

                <button onClick={salvar}> SALVAR </button>
            </div>


            <div className='consultar'>
                <h1> CONSULTAR </h1>
                <button onClick={buscar}>Buscar</button>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Senha</th>
                        </tr>
                    </thead>

                    <tbody>
                        {consulta.map(item =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>{item.senha}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
