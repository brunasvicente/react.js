import './index.scss';
import { useState } from 'react';

export function Contador() {
    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }


    return (
        <div className="comp-contador">
            <h1>Contador</h1>

            <div className='cont'>
                <button onClick={aumentar}>+</button>
                {contador}
                <button onClick={diminuir}>-</button>
            </div>
        </div>
    )
}
