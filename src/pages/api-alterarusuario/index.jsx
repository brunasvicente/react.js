import { useState } from 'react'
import './index.scss'

import axios from 'axios'


export default function AlterarUsuario() {
    //Alterar Usuáro
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [id, setId] = useState(0)

    async function salvar() {
        const paramCorpo = {
            "nome": nome,
            "email": telefone,
            "senha": senha
        }

        const url = 'http://localhost:5001/tcc/autonomo';
        let resp = await axios.post(url, paramCorpo);

        alert('Autônomo adicionado. Id: ' + resp.data.novoId);
    }

    async function alterar() {
        const paramCorpo = {
            nome: nome,
            telefone: telefone,
            senha: senha
        }

        const url = `http://localhost:5001/tcc/usuario/${id}`
        let resp = await axios.put(url, paramCorpo)
        alert('Usuário alterado!')
    }

    //Consultar Usuários
    const [consulta, setConsulta] = useState([]);

    async function buscar() {
        const url = 'http://localhost:5001/tcc/autonomo';
        let resp = await axios.get(url);
        setConsulta(resp.data);
    }


    return (
        <div className='pagina-api-autonomo'>

            <div className='cadastrar'>
                <h1> ALTERAR USUÁRIO </h1>

                <div className='form'>
                    <div>
                        <label>ID:</label>
                        <input type='number' value={id} onChange={e => setId(e.target.value)} />
                    </div>
                    <div>
                        <label>Nome:</label>
                        <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label>Telefone:</label>
                        <input type='text' value={telefone} onChange={e => setTelefone(e.target.value)} />
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
