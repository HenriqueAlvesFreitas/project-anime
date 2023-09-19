import { Body } from "./style";
import AnimeItem from './../../components/animeItem/index.js'
import {GetAllAnimes} from './../../service/animeService/animeService.js'
import Pagination from "../../components/pagination/index.js";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GetAnimeByCategory, GetAnimeBySearch } from "./../../service/animeService/animeService.js";
import { mountAnimeObj } from "../../utils/mountAnimeObj";
import Loading from "../../components/loading";
import { isEmpty } from "../../utils/isEmpty";

export default function AnimeList(){
    const [animeObj, setAnimeObj] = useState([])
    const [info, setInfo] = useState({})
    const [myOffset, setMyOffset] = useState(10)
    const itemsLimit = 10
    const params = useParams();
    const location = useLocation();

    const filter = params.filter
    const search = params.search

    const isFiltered = !filter ? false : true
    const isSearched = !search ? false : true

   
  
    useEffect(()=>{
        if(isFiltered){
            getAnimeByCategory(filter, myOffset, itemsLimit)
        }
        else if(isSearched){
            getAnimeBySearch(search, myOffset, itemsLimit)
        }

        else{
            getAllAnimes(myOffset , itemsLimit)
        }   
    }, [myOffset, isFiltered, filter,isSearched,search])

    useEffect(()=>{setMyOffset(10)}, [location])

    const getAllAnimes = (offset, limit)=>{
        GetAllAnimes(offset, limit).then(
            (resp)=>{
                let data = resp.data.data
                let list = []
                setInfo(resp.data.meta)
                data.map((item)=>{

                   let obj = mountAnimeObj(item)
                          
                        list.push(obj)
                 
                })

                setAnimeObj(list)

            },
            (error)=>{}
        )
    }

    const getAnimeByCategory = (value, offset, limit) =>{
        GetAnimeByCategory(value, offset, limit).then(
            (resp)=>{
                let data = resp.data.data
                let list = []
                setInfo(resp.data.meta)
                data.map((item)=>{
                    let obj = mountAnimeObj(item)
                          
                        list.push(obj)
                 
                })

                setAnimeObj(list)

            },
            (error)=>{}
        )
    }

    const getAnimeBySearch = (value, offset, limit) =>{
        GetAnimeBySearch(value, offset, limit).then(
            (resp)=>{
                let data = resp.data.data
                let list = []
                setInfo(resp.data.meta)
                data.map((item)=>{
                    let obj = mountAnimeObj(item)
                          
                        list.push(obj)
                 
                })

                setAnimeObj(list)

            },
            (error)=>{}
        )
    }

    const selectTitle = () =>{
        
        let text = ''
        if(isFiltered){
            text = `Animes Filtrados por ${filter}`
           
        }
        else if(isSearched){
            text = `Animes Filtrados pela pesquisa ${search}`
        }
        else{
            text = "Todos os animes"
        }

        return text
    }
  


    return(
        <>
        {!isEmpty(animeObj)? 
        <Body>

            <div className="titleRow">
                <h2>{selectTitle()}</h2>
            </div>
            
            <div className="row">
                {animeObj.map((item)=>
                    <AnimeItem className="animeItem" data={item}/>
                )}
                
            </div>

            <div className="buttonRow">
                <Pagination
                    limit={itemsLimit}
                    total={info.count}
                    offset={myOffset}
                    setOffset={setMyOffset}
                /> 
            </div>
        </Body>
        :
        <>
        <div style={{height:"70vh"}}/>
        <Loading show={true}/>
        
        </> 
         }
        </>
    )
}