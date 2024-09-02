import './index.scss';
import { useState } from 'react';


export default function Faq() {
    const [seta, setSeta] = useState(false)

    function abrirFechar() {
        setSeta(!seta)
    }
    
    return(
        <div className='pagina-faq'>
            <h1>FAQ</h1>
            <hr />

            <details className='perguntas'>
                <summary className='seta' >
                    <img src="/assets/images/seta-faq.png" id='setafaq' onClick={abrirFechar} alt="Setinha" />
                </summary>

                {abrirFechar &&
                    <section>
                        <details>
                            <summary>Onde está localizado?</summary>
                            <p>O evento ocorrera na localização: Av. Cel. Octaviano de Freitas Costas 463 <br /> JD Veleiros - São Paulo - SP</p>
                        </details>
                        <hr />

                        <details>
                            <summary>Como possso cursar no Instituto?</summary>
                            <p>Você deve entrar em nosso aplicativo que será disponibilizado no final do ano <br /> para realizar a sua inscrição de acordo com o curso de interesse e seguir as devidas orientações</p>
                        </details>
                        <hr />

                        <details>
                            <summary>Quem pode ir à feira?</summary>
                            <p>Qualquer pessoa pode vir a feira, a sua presença é mais que bem vinda! Mas não se esqueça de concluir seu cadastro aqui em nosso site</p>
                        </details>
                        <hr />

                        <details>
                            <summary>Quem fez os projetos?</summary>
                            <p>Todos os projetos serão desenvolvidos por nossos alunos, você irá se entreter numa aventura de informação e conhecimento</p>
                        </details>
                        <hr />

                        <details>
                            <summary>O evento é gratuito?</summary>
                            <p>Sim, o evento é gratuito; disponibilizamos todas as atrações e intreções com inúmeras novidades</p>
                        </details>
                        <hr />

                        <details>
                            <summary>Sobre a alimentação</summary>
                            <p>Conheça nossa padaria, lá temos inúmeras variedades de doces e pães de dar água na boca. Caso bater aquela fome, já sabe para pnde ir</p>
                        </details>
                        <hr />

                        <details>
                            <summary>Como validar meu ingresso?</summary>
                            <p>Assim que chegar no Instituto fale que já fez o cadastro e informe algumas informações; após isso, siga as orientações dadas pelos atendentes</p>
                        </details>
                        <hr />

                        <details>
                            <summary>Qual o objetivo da feira?</summary>
                            <p>O objetivo de uma feira de profissões é conectar estudantes e profissionais em início de carreira com diversas áreas de atuação. O evento permite que os participantes explorem diferentes profissões, conheçam o mercado de trabalho e recebam orientações sobre as melhores opções de profissões, conheçam o mercado de trabalho e recebem orientações sobre as melhores opções para seu futuro. A feira facilita o contato direto com especialistas, oferece palestras  e workshops, e ajuda a esclarecer dúvidas sobre carreiras  qualificações  necessárias, auxiliando na profissional de forma mais informada e prática</p>
                        </details>
                        <hr />
                    </section>
                }

            </details>
        </div>
    )
}
