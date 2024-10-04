import { useState } from 'react';
import './index.scss';

//Componentes
import Cabecalho from '../../components/cabecalho';


export default function Formulario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [usuario, setUsuario] = useState([])

    function cadastrarUsuario() {
        if (nome == '' || email == '' || senha == '') {
            alert('Preencha todos os Campos!!!')
            return
        }
        
        let usuarioCadastrado = {
            nome: nome, 
            email: email,
            senha: senha
        }

        setUsuario([...usuario, usuarioCadastrado])
        setNome('')
        setEmail('')
        setSenha('')
    }

    return(
        <div className='pagina-pratica-formulario pagina'>
            <Cabecalho titulo='React JS | Formulário de Inscrição de Usuário'/>

            <section className='secao'>
                <input type="text" placeholder='Nome' value={nome} onChange={a => setNome(a.target.value)}/>
                <input type="text" placeholder='Email' value={email} onChange={a => setEmail(a.target.value)}/>
                <input type="password" placeholder='Senha' value={senha} onChange={a => setSenha(a.target.value)}/>
                <button onClick={cadastrarUsuario}>Cadastrar</button>
            </section>
        </div>
    )
}
