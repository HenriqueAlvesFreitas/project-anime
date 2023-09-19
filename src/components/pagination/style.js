
import { styled } from "styled-components";



export const Body = styled.div`



button {
    width:70px;
    height:70px;
    color:white;
    background-color:#f46d1b;
    border-style:none;
    transition: 0.3s;
    border-radius:0.5rem;
    margin:5px;
}

button:hover{
   background-color:#ff901c;
}

button:active{
    background-color:white;
    color:red;
}
button:disabled{
    background-color:gray;
    color:darkgray;
}

button * {
    width:100%;
    height:50%;
}

`