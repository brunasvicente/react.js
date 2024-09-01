import './index.scss';

export function CartaoLivro(props) {
    return (
        <div className='comp-cartao-livro'>
            <div className='cartao'>
                <img src={props.item.url} alt="" />
                <h3>{props.item.nome}</h3>
                <p className='autor'>{props.item.autor}</p>
                <p className='editora'>{props.item.editora}</p>
                <p className='ano'>{props.item.ano}</p>
                <hr />
                <p className='preco'>A partir de <b>R$ {props.item.preco}, 00</b></p>
            </div>
        </div>
    )
}
