import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Contato from './pages/contato';
import NaoEncontrado from './pages/nao-encontrado';
import Eventos from './pages/eventos';
import Varestado from './pages/varestado';
import Comps from './pages/comps';
import RenderizacaoCondicional from './pages/renderizacao';
import Efeito from './pages/efeito';

import Rodape from './pages/rodape';
import Faq from './pages/faq';

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App/> }/>
                <Route path='/contato' element={ <Contato/> }/>
                <Route path='/eventos' element={ <Eventos/> }/>
                <Route path='/varestado' element={ <Varestado/> }/>
                <Route path='/comps' element={ <Comps/> }/>
                <Route path='/renderizacao' element={ <RenderizacaoCondicional/> }/>
                <Route path='/efeito' element={ <Efeito/> }/>

                <Route path='/rodape' element={ <Rodape/> }/>
                <Route path='/faq' element={ <Faq/> }/>

                <Route path='*' element={ <NaoEncontrado/> }/>
            </Routes>
        </BrowserRouter>
    )
}
