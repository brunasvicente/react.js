import './index.scss'

export default function ItemMeta (props) {
    return (
        <li className='com-item-meta'>
            <i class="fa-regular fa-pen-to-square" onClick={() => props.alterarMeta(props.pos)}></i> &nbsp;
            <i class="fa-solid fa-trash" onClick={() => props.removerMeta(props.pos)}></i> &nbsp;
            {props.item}
        </li>
    )
}
