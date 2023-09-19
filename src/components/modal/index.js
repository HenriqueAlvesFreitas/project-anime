import { Body } from "./style";

import { FaTimes } from "react-icons/fa";

export default function Modal({isOpen, close, videoLink}){


if(isOpen){
    return(
        <>
            <Body onClick={close}>
                <div className="video">
                    <iframe  frameBorder="0" src={`https://www.youtube.com/embed/${videoLink}`} allowFullScreen/>                
                </div>
            </Body>
        </>
    )
}

}