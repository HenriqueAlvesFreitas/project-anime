import { styled } from "styled-components";


export const Body = styled.div`
 display:flex;

img{
    width:100%;      
    cursor: pointer;
    margin-bottom:5%;
    margin-right:2%;
    z-index:0;
    flex-grow:1;
}

.description{
    left: 50%;
    top:90%;
    position:absolute;
    width:85%;
    transform:translateX(-50%);
    background-color:rgb(35, 35, 35);
    color:#CCCCCC;
    padding:10px 15px;
    border-radius:7px;
    visibility: hidden;
    opacity:0; 
    transition: opacity 0.5s ease;
    z-index:1;
    flex-grow:1;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.description > *{
    margin:0px;    
}

.description::after{
    content:"";
    position:absolute;
    left:50%;
    bottom:100%;
    transform: translateX(-50%);
    border: 15px solid;
    border-color: #0000 #0000 rgb(35, 35, 35) #0000;
    
}

.detail:hover .description{

visibility: visible;
opacity: 1;

}

.title{
    font-size: larger;
    font-weight: 600;
}

.rating{
    font-size: x-large;
    color: #189079;
    font-weight: 500;
    margin-bottom:3% !important;
}

.synopsis{
    font-size: 1rem;
    overflow:hidden;
    font-weight: 400;
  /*   margin-top:5% !important; */
    font:Inter;

}

@media(max-width:1450px){


.title{
    font-size:1rem;
}
.rating{
    font-size:1.25rem
}

.synopsis{
    font-size:0.75rem
}

.data{
    font-size:0.8rem
}

}

@media(max-width:1100px){
.title{
    font-size:0.75rem;
}
.rating{
    font-size:1rem
}

.synopsis{
    font-size:0.70rem
}

.data{
    font-size:0.6rem
}

}

@media(max-width:500px){
.synopsis{
    font-size:0.60rem
}

}

@media(max-width:400px){
    .description{
        max-height:140%;
    }

    .title{
    font-size:0.65rem;
}

.rating{
    font-size:0.80rem
}



    .synopsis{
    font-size:0.60rem
}
}


`

