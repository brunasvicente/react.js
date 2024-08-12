import './index.scss'

export default function Eventos() {
    function clicou() {
        alert('O usuário clicou no botão')
    }

    function movimentouMouse() {
        alert('Movimentou o mouse')
    }

    function alterouValor(v) {
        let valor = v.target.value //String
        alert(`Valor alterado: ${valor}`)
    }

    function alterouCheck(e) {
        let novoValor = e.target.checked //Boolean
        alert(`Alterou o valor do Input para: ${novoValor}`)
    }

    return(
        <div className='pagina-eventos pagina'>
            <header>
                <h1>ReactJS | Eventos</h1>
            </header>

            <section className='secao'>
                <h1>Entendendo eventos</h1>

                <p onMouseMove={movimentouMouse}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur maxime suscipit, mollitia excepturi fugiat deleniti totam accusantium voluptatem repellat? Enim nesciunt expedita laborum, incidunt veniam recusandae animi cupiditate consequatur ipsa!</p>

                <input onChange={alterouValor} type="text" placeholder='Digite qualquer coisa'/>

                <textarea onChange={alterouValor}></textarea>

                <select>
                    <option>Selecione</option>
                    <option>Item A</option>
                    <option>Item B</option>
                </select>

                <div className='grupo'>
                    <input type="checkbox" onChange={alterouCheck}/> Opção 1
                    <input type="checkbox" onChange={alterouCheck}/> Opção 2
                </div>

                <div className='grupo'>
                    <div>
                        <input type="radio" name='gpo' onChange={alterouCheck}/> Opção 2
                    </div>

                    <div>
                        <input type="radio" name='gpo' onChange={alterouCheck}/> Opção 2
                    </div>
                </div>
                
                <button onClick={clicou} >Clique Aqui</button>
            </section>
        </div>
    )
}