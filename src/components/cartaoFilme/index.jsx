import './index.scss';

export function CartaoFilme(props) {

    function cor() {
        if (props.item.classificacao == 'l') return 'classificacao-l'
        else if (props.item.classificacao == '12') return 'classificacao-12'
        else if (props.item.classificacao == '14') return 'classificacao-14'
        else if (props.item.classificacao == '16') return 'classificacao-16'
        else if (props.item.classificacao == '18') return 'classificacao-18'
    }

    return(
        <div className='comp-cartao-filme'>
            <img src={props.item.urlCapa} alt="Cartaz do filme Divertida Mente 2" />
            <p> {props.item.nome} </p>
            <div className={'classificacao ' + cor()}> {props.item.classificacao} </div>
        </div>
    )
}