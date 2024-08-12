import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Contato from './pages/contato';
import NaoEncontrado from './pages/nao-encontrado';
import Eventos from './pages/eventos';
import Varestado from './pages/varestado';

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App/> }/>
                <Route path='/contato' element={ <Contato/> }/>
                <Route path='/eventos' element={ <Eventos/> }/>
                <Route path='/varestado' element={ <Varestado/> }/>

                <Route path='*' element={ <NaoEncontrado/> }/>
            </Routes>
        </BrowserRouter>
    )
}