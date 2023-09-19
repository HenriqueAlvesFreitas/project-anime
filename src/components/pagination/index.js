import React from "react";
import { Body } from "./style";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'


export default function Pagination({ limit,  total, offset,  setOffset}){

  
    

    const current = offset ? offset / limit + 1 : 1
    const pages = Math.ceil(total / limit);
    console.log(current)
    console.log(pages)
    console.log(((current+1) -1)*limit)

    function onPageChange(page) {
        setOffset((page - 1) * limit);
      }

      return (
      
        <Body>
            <button
              onClick={() => onPageChange(current - 1)}
              disabled={current === 2}
            >
              <FaArrowLeft/>
            </button>
     
       
            <button
              onClick={() => onPageChange(current + 1)}
              disabled={current === pages}
            >
              <FaArrowRight/>
            </button>
        </Body>
      
      );
   
}   