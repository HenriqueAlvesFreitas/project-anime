import {Body} from './style.js'
import yuzu from './../../../assets/yuzu1.png'
import logo from './../../../assets/logo_branco.png'
import { useNavigate } from 'react-router-dom'


export default function Footer() {
   const navigate = useNavigate()

    return(
       
            <Body>
                <div className='row'>
                    <img src={yuzu}></img>
                    <p className='p p1'>ainda está procurando algo pra assitir ?</p>
                    <p className='p p2'> Confira o nosso acervo completo</p>
                    <button onClick={()=>(navigate("/anime-list"))}>VER TUDO</button>
                </div>

                <div className='row2'>
                    <p>© 2023 FPR Animes - Todos os direitos reservados.</p>
                    <img src={logo}></img>
                </div>
            </Body>
        
    )
}