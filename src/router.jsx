import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Contato from './pages/contato';
import NaoEncontrado from './pages/nao-encontrado';
import Eventos from './pages/eventos';
import Varestado from './pages/varestado';
import Comps from './pages/comps';
import RenderizacaoCondicional from './pages/renderizacao';
import Efeito from './pages/efeito';
import Api from './pages/api';

import Formulario from './pages/praticaFormulario';

import Rodape from './pages/rodape';
import Faq from './pages/faq';

import CadastrarUsuario from './pages/api-cadastrousuario';
import CadastrarAutonomo from './pages/api-cadastroautonomo';



import Chatbot from './pages/chatbot';

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                {/* Páginas de Estudo */}
                <Route path='/' element={ <App/> }/>
                <Route path='/contato' element={ <Contato/> }/>
                <Route path='/eventos' element={ <Eventos/> }/>
                <Route path='/varestado' element={ <Varestado/> }/>
                <Route path='/comps' element={ <Comps/> }/>
                <Route path='/renderizacao' element={ <RenderizacaoCondicional/> }/>
                <Route path='/efeito' element={ <Efeito/> }/>
                <Route path='/api' element={ <Api/> }/>

                {/* Páginas de Prática */}
                <Route path='/praticaFormulario' element={ <Formulario/> }/>

                {/* Páginas da Feira de Profissões */}
                <Route path='/rodape' element={ <Rodape/> }/>
                <Route path='/faq' element={ <Faq/> }/>

                <Route path='/api-cadastrousuario' element={ <CadastrarUsuario/> }/>
                <Route path='/api-cadastroautonomo' element={ <CadastrarAutonomo/> }/>
                <Route path='/chatbot' element={ <Chatbot/> }/>


                <Route path='*' element={ <NaoEncontrado/> }/>
            </Routes>
        </BrowserRouter>
    )
}
