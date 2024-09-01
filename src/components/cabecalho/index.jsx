import './index.scss'

export default function Cabecalho(props) {
    return (
        <header className='cabecalho'>
            <h1>{props.titulo}</h1>
        </header>
    )
}
