import './index.scss';
import { useState, useEffect } from 'react';

//Componentes
import Cabecalho from '../../components/cabecalho';


export default function Efeito() {
    //Média e Situação do Aluno
    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [media, setMedia] = useState(0)
    const [situacao, setSituacao] = useState('')

    useEffect(() => {
        avaliarNotas();
    }, [nota1, nota2, nota3])

    useEffect(() => {
        avaliarSit();
    }, [media])

    function avaliarNotas() {
        let m = (Number(nota1) + Number(nota2) + Number(nota3)) /3
        setMedia(m)
    }

    function avaliarSit() {
        if (media >= 6) setSituacao('Aprovado')
        else setSituacao('Reprovado')
    }

    //Situação Aluno
    const [mencao, setMencao] = useState('')
    const [sitMencao, setSitMencao] = useState('')

    useEffect(() => {
        avaliarMencao();
    }, [mencao])

    function avaliarMencao() {
        if (mencao == 'PS') setSitMencao('Plenamente Satisfatório')
        else if (mencao == 'S') setSitMencao('Satisfatório')
        else if (mencao == 'NS') setSitMencao('Não Satisfatório')
        else setSitMencao('Inválido')
    }

    return(

        <div className='pagina-efeitos pagina'>
            <Cabecalho titulo='React JS | Efeitos'/>

            <div className='secao'>

                <h1>Notas Aluno</h1>

                <div className='notas-aluno'>
                    <div className='entradas'>
                        <input type="text" value={nota1} onChange={a => setNota1(a.target.value)}/>
                        <input type="text" value={nota2} onChange={a => setNota2(a.target.value)}/>
                        <input type="text" value={nota3} onChange={a => setNota3(a.target.value)}/>
                    </div>

                    <div className='media'>
                        <label>Média: </label>
                        <div> {media.toFixed(2)} </div>
                    </div>

                    <div className='media-situacao'>
                        <label>Sit.: </label>
                        <div> {situacao} </div>
                    </div>
                </div>

            </div>

            <div className='secao'>

                <h1>Situação do Aluno</h1>

                <div className='sit-aluno'>
                    <div>{sitMencao}</div>

                    <div>
                        <label>Menção: </label>
                        <input type="text" value={mencao} onChange={a => setMencao(a.target.value)} />
                    </div>
                </div>

            </div>
        </div>
    )
}
