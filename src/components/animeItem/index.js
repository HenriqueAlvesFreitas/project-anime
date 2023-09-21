import { selectName } from "../../utils/selectName";
import { Body } from "./style"
import { useNavigate } from "react-router-dom"
import { ellipsis } from "../../utils/ellipses";



export default function AnimeItem({data, className}){
    const navigate = useNavigate();

    


    return(
        <Body>  
            <div className="detail" style={{position:"relative"}}>
                <img style={{backgroundColor:'gray'}} loading="lazy" src={data.image} className={className} alt={selectName(data)} onClick={()=>{navigate("/anime/" + data.id_anime)}}/>
                <span className="description">
                    <p className="title">{selectName(data)}</p>
                    <p className="rating">{data.rating}%</p>
                    <p className="data">❤️ #{data.popularity_rank} Mais Popular</p>
                    <p className="data">⭐ #{data.rating_rank} Melhor Classificado</p>
                    <div className="synopsis">
                    <p>{ellipsis(data.synopsis, 35)}</p>
                    </div>
                </span>
            </div>
        </Body>
    )
    
    
    }