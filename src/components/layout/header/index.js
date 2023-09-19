import React, { useEffect, useState } from "react";
import Banner from './../../../assets/banner.png'
import { Body } from "./styles";
import Logo from './../../../assets/logoMaior.png'
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { GetAnimeById } from "../../../service/animeService/animeService";

export default function Header() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const id_anime = location.pathname
    const [cover, setCover] = useState()


  

    useEffect(()=>{
        if(!isNaN(formatLocation(id_anime))){
             getAnimeById(formatLocation(id_anime))
        }else{
            setCover("")
        }
    }, [location])

    const formatLocation = (data) =>{
        let formated = parseInt(data.slice(7))
        return formated
       }
    
    const getAnimeById = async(id) =>{
         GetAnimeById(id).then(
            (resp)=>{
                let data = resp.data.data
                
                let obj = data.attributes.coverImage.small
               
                setCover(obj)
            },
            (error)=>{}
        )
    }


    const  search = (e, mouse) => {
        if (e.key === 'Enter' || mouse) {
         navigate('anime-search-list/' + input)
        }
    }

    const  searchMouse = () => {
        navigate('anime-search-list/' + input)
    }

    
    
    const handleSearchChange = (event) =>{
        let code = event.target.value
        setInput(code)
    }

    
    return(
        <Body id="form" style={{ 
            backgroundImage: isNaN(formatLocation(id_anime)) ? `url(${Banner})` : `url(${cover})`,
            backgroundColor: isNaN(formatLocation(id_anime)) ? '' : 'gray'
            }}>
            {isNaN(formatLocation(id_anime)) ?
                <>
                    <div className="row">
                        <img onClick={()=>navigate("/")} src={Logo}></img>
                        
                        <div className="searcher">
                            <input type="search" placeholder="Buscar"
                            onKeyUp={search}
                            onChange={handleSearchChange}
                            />    
                            <FaSearch className="searchIcon" onClick={searchMouse}/>
                        </div>
                    </div>
                    <div className="titleRow">
                        <h1>O  <span style={{color:"#f46d1b"}}> Maior </span> 
                            Catálogo de<br/> 
                            <span style={{color:"#34ac40"}}>Anime </span> do Mundo
                        </h1>
                    </div>
                </>
                :
                <>
                <div className="detailRowBackGround">
                    <div  className="detailRow">
                        <img onClick={()=>navigate("/")} src={Logo}></img>

                        <div className="searcher">
                                <input type="search" placeholder="Buscar"
                                onKeyUp={search}
                                onChange={handleSearchChange}
                                />    
                                <FaSearch className="searchIcon" onClick={searchMouse}/>
                        </div>
                    </div>
                </div>
                </>
            }
        </Body>
    
    )
}