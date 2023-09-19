import { useParams } from "react-router-dom"
import { Body } from "./style";
import {GetAnimeById} from './../../service/animeService/animeService.js'
import { useEffect, useState } from "react";
import { selectName } from "../../utils/selectName";
import { FaYoutube } from "react-icons/fa";
import Modal from "../../components/modal";
import Loading from './../../components/loading/index.js'
import { mountAnimeObj } from "../../utils/mountAnimeObj";

 export default function AnimeDetail(){
    const params = useParams();
    const id = params.id
    const [animeObj, setAnimeObj] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [showLoading, setShowLoading] = useState(true)
    


    useEffect(()=>{
        getAnimeById(id)
    }, [])

    const getAnimeById = (id) =>{
        GetAnimeById(id).then(
            (resp)=>{
                let data = resp.data.data
                let obj = mountAnimeObj(data)              
                setAnimeObj(obj)
                setShowLoading(false)

            },
            (error)=>{}
        )
    }

    
    return(
   
  
        <>
        <Loading show={showLoading}/> 

        <Modal isOpen={showModal} close={()=>{setShowModal(!showModal)}} videoLink={animeObj.video}/>
        
        <Body>
            <div className="description">
                <img src={animeObj.image} />
                <button onClick={()=>{setShowModal(!showModal)}}><FaYoutube className="youtubeIcon"/>VER TRAILER</button>
                <p className="rating">
                    Aprovado por 
                    <label className="data"> {animeObj.rating}% </label> 
                    <br/>
                    da comundiade
                </p>
                <div className="statistics">
                    <p>❤️ #{animeObj.popularity_rank} Mais Popular</p>
                    <p>⭐ #{animeObj.rating_rank} Melhor Classificado</p>
                </div>
            </div>

            <div className="synopsis">
                <h2>{selectName(animeObj)}</h2>
                <p>{animeObj.synopsis}</p>
            </div>
        </Body>
                
        
        </>
    )
}