import { Body } from "./style";
import Carousel from 'react-elastic-carousel';

import img1 from './../../assets/banner interno 1.png'
import img2 from './../../assets/banner interno 2.png'
import img3 from './../../assets/banner interno 3.png'

import { GetAnimeByRating, GetAnimeByPopularity } from "../../service/animeService/animeService";
import { useEffect, useState } from "react";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import AnimeItem from "../../components/animeItem";
import { isEmpty } from "../../utils/isEmpty";
import { mountAnimeObj} from './../../utils/mountAnimeObj.js'
import Loading from "../../components/loading/index.js";

export default function Home({history}) {
    const [animeObj, setAnimeObj ] = useState([])
    const [animeByRating, setAnimeByRating] = useState([])
    const reference = useRef(0)
    const images = [{image:img1, id:11}, {image:img2, id:720}, {image:img3, id:12}]
    const navigate = useNavigate()
    



    useEffect(()=>{
        getAnimeByPopularity()
        getAnimeByRating()
    }, [])

    
    const getAnimeByPopularity = () =>{
        GetAnimeByPopularity().then(
            (resp)=>{
                let data = resp.data.data
                let list = []
                data.map((item)=>{
                    let obj = mountAnimeObj(item)
                    list.push(obj)
                })
                setAnimeObj(list)

            },
            (error)=>{}
        )
    }

    const getAnimeByRating = () =>{
        GetAnimeByRating().then(
            (resp)=>{
                let data = resp.data.data
                let list = []
                data.map((item)=>{
                    let obj = mountAnimeObj(item)
                    list.push(obj)
                })
                setAnimeByRating(list)

            },
            (error)=>{}
        )
    }

    const handleCarousel = (data) =>{
        if((data.index + 1) === images.length){
          setTimeout(
          ()=>{
            try{
                reference.current.goTo(0)
            }catch (e){
                
            }
            }, 3000)
        
      }
      }

     

    return(
        <Body>
            <div className="block">
                <h2>Animes Mais Populares</h2>
                <div className="animeRow">
                    {!isEmpty(animeObj) ? animeObj.map((item, idx)=><AnimeItem className="animeItem" data={item}/>)
                    :
                    <Loading show={true}/>
                    }
                </div>
            </div>

            <div className='carousel-wrapper'>
                <Carousel enableAutoPlay 
                        autoPlaySpeed={3000}
                        ref={reference}
                        disableArrowsOnEnd={false}
                        showArrows={false}
                        
                onNextEnd={(item)=>{
                    handleCarousel(item)
                }}>
                    {images.map((item, idx)=>(
                    <img src={item.image} key={idx} onClick={()=>{navigate("anime/" + item.id)}}/>
                    ))}
                </Carousel>
            </div>
              
            <div style={{marginBottom:"5%"}} className="block">
                <h2>👍 Animes Mais Bem Classificados</h2>
                <div className="animeRow">
                 {animeByRating.map((item, idx)=><AnimeItem className="animeItem" data={item}/>)}
                </div>
            </div> 

        </Body>
    )
}