import { styled } from "styled-components";


export const Body = styled.div`
position:fixed;
width:100%;
height:100%;
padding:0;
margin:0;
background-color:rgb(0,0,0,0.8);
z-index:100;
left:0px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
cursor:pointer;

.video{
    position: relative;
    width: 60%;
    height: 80%;  
    overflow: hidden;
}

.video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.FaTimes{
    position: absolute;
    right: 15%;
    top: 10%;
    font-weight: bolder;
    font-size: 200%;
    cursor: pointer;
    color:white;
}
.FaTimes:hover{
    color:#ff901c;
}

@media (min-width: 762px) and (max-width: 1023px) {
  .video{
    width:90%;
    height:40%;
  }


}

@media (max-width: 761px){
  
    .video{
    width:90%;
    height:30%;
  }


}

`