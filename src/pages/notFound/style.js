import { styled } from "styled-components";


export const Body = styled.div`

width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

img{
    margin:1% 1%;
    width:50%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

h1{
    color:#f46d1b;
    font-size:2.5rem;
}

button {
    width:140px;
    height:70px;
    color:white;
    background-color:#f46d1b;
    border-style:none;
    transition: 0.3s;
    border-radius:0.5rem;
    margin:5px;
    font-size: 1.5rem;
    font-weight:700;
}



button:hover{
   background-color:#ff901c;
}

button:active{
    background-color:white;
    color:red;
}

.message{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 80%;

}


`