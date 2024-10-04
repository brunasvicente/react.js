import { useState } from 'react';
import './index.scss';

import axios from 'axios';


export default function CadastrarUsuario() {
    //Cadastrar Usuário
    const [usuario, setUsuario] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');

    async function salvar() {
        const paramCorpo = {
            "usuario": usuario,
            "telefone": telefone,
            "senha": senha
        }

        const url = 'http://localhost:5001/tcc/usuario';
        let resp = await axios.post(url, paramCorpo);

        alert('Usuário adicionado. Id: ' + resp.data.novoId);
    }

    //Buscar Usuários
    const [consulta, setConsulta] = useState([]);

    async function buscar() {
        const url = 'http://localhost:5001/tcc/usuario';
        let resp = await axios.get(url);
        setConsulta(resp.data);
    }


    return (
        <div className='pagina-api-usuario'>

            <div className='cadastrar'>
                <h1> CADASTRAR USUÁRIO </h1>

                <div className='form'>
                    <div>
                        <label>Nome:</label>
                        <input type='text' value={usuario} onChange={e => setUsuario(e.target.value)} />
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
                <h1> CONSULTAR USUÁRIOS </h1>

                <button onClick={buscar}>Buscar</button>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuário</th>
                            <th>Telefone</th>
                            <th>Senha</th>
                        </tr>
                    </thead>

                    <tbody>
                        {consulta.map(item =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.usuario}</td>
                                <td>{item.telefone}</td>
                                <td>{item.senha}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
