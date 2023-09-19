import { useNavigate } from 'react-router-dom'
import Zoro from './../../assets/zoro.jpg'
import { Body } from './style'

export default function NotFound (){

    const navigate = useNavigate()

    return(
        <Body>
            <img src={Zoro}/>
            <div className='message'>
                <h1>
                    Parece que você encontro o <label style={{color:"#34ac40"}}>Zoro</label>.
                     <br/>gostaria de voltar ao menu ?
                </h1>
                <button onClick={()=>{navigate('/')}}>MENU</button>
            </div>
        </Body>
    )
}