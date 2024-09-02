import './index.scss';


export default function Rodape() {
    
    return(

        <div className='pagina-rodape'>
            <div className='info-principais'>
                <img src="/assets/images/logofrei-fundo.svg" alt="Logo do Frei" />
                <p>2024 &copy;</p>
                <hr />
            </div>

            <div className='inicio'>
                <h1>INÍCIO</h1>
                <p>Home</p>
                <p>Ingressos</p>
            </div>

            <div className='contatos'>
                <h1>CONTATO</h1>

                <div className='sub1'>
                    <img id='contato-img' src="/assets/images/telefone.png" alt="" />
                    <p>TEL: 11 5687-8876 / 11 3798-5036</p>
                </div>

                <div className='sub2'>
                    <img id='contato-img' src="/assets/images/carta.png" alt="" />
                    <p>ACAOSOC@GLOBO.COM</p>
                </div>

                <div className='sub3'>
                    <img id='contato-img' src="/assets/images/localizacao.png" alt="" />
                    <p>AV. CEL. OCTAVIANO DE FREITAS COSTA, 463 JD <br /> VELEIROS SÃO PAULO - SP</p>
                </div>
            </div>

            <div className='redes'>
                <a href="https://www.youtube.com/@institutosocialnossasenhor3548">
                    <i class="fa-brands fa-youtube fa-2xl" id='icone'></i>
                </a>
                
                <a href="https://www.facebook.com/institutonsfatima/">
                    <i class="fa-brands fa-facebook-f fa-2xl" id='icone'></i>
                </a>
                
                <a href="https://www.instagram.com/institutonsfatima/">
                    <i class="fa-brands fa-instagram fa-2xl" id='icone'></i>
                </a>
            </div>
        </div>
    )
}
