import React, { useEffect, useState } from "react";
import { Body } from "./style";
import {FaTimes} from 'react-icons/fa'
import { GetAllCategories } from "../../../../service/animeService/animeService";
import { useNavigate } from "react-router-dom";

export default function Sidebar({active}){
    const [categories, setCategories] = useState([])
    const navigate = useNavigate();

  
    useEffect(()=>{
        getCategories()
    }, [])

    const closeSidebar = () => {
        active(false)
    }
    
    const getCategories = () =>{
        GetAllCategories().then(
            (resp)=>{
                let list =[]
                let obj = resp.data.data
                obj.map((item, idx)=>{
                    list.push(item.attributes.title)
                })
                setCategories(list)

            },
            (error)=>{}
        )
    }


    return(
        <Body  sidebar={active}>
            <FaTimes onClick={closeSidebar}/>
            <h2>≡ Categorias</h2>
            <div className="content">
                {categories.map((item, idx)=>(
                    <p key={idx} onClick={()=>{navigate("/anime-list/" + item)}}>{item}</p>
                ))}

            </div>
        </Body>
    )

}