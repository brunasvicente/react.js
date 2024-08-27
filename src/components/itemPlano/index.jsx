import './index.scss';

export function ItemPlano(props) {
    return (
        <div className='comp-item-plano'>
            <div className='cor' style={{ backgroundColor: props.item.tema }}>&nbsp;</div>
            <div>
                <h1> {props.item.titulo} </h1>
                <h2> {props.item.tempo} </h2>
            </div>
        </div>
    )
}