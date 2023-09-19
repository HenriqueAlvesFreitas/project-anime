import styled from 'styled-components'


export const Body = styled.div`
min-height:70vh;
display:flex;
flex-direction:row;
position:relative;


.description{
width: 25%;
display:flex;
flex-direction:column;
height:100%;
align-items:center;
position:relative;
top:-10%

}

.description img{
    width:60%;
    position:relative;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.description button{
    margin-top:5%;
    background-color:#f46d1b;
    color:white;
    border-style:none;
    cursor:pointer;
    border-radius:0.5rem;
    height:8%;
    font-weight:700;
    font-size:95%;
    display:flex;
    flex-direction:row;
    align-items:center;
    width:40%;
    transition: 0.3s;
}

.description button:hover{
    background-color:#ff901c;
}

.description button:active{
    background-color:white;
    color:#ff901c;
}

.youtubeIcon{
    width: 40%;
    height: 70%;
}

.synopsis{
    width: 60%;
    position: relative;
    left: 0;
    font-size: larger;
    font:inter;
}

.synopsis p{
    font-weight:500;
}

.rating{
    color:#16a085;
    font-weight: 400;
}

.data{
    font-size:20px
}

.statistics{
    display:flex;
    flex-direction:column;
    font-weight: 500;
    font-size: unset;

}

.statistics >*{
    margin-top:1%;
}


@media (min-width: 762px) and (max-width: 1023px) {
    .description{
        width:35%;
        top:-5%;
    }

    .description img{
    width:168px;
    height:240px;
   
    }

    .description button{
        width:50%;
    }


}

@media (max-width: 761px){
    gap:1%;
    .description{
        width:40%;
        top:2%;
    }

    .description img{
    width:100%
   
    }

    .description button{
        margin-top:10%;
        width:70%;
        font-size:0.6em;
    }

    .synopsis{
        top:5%;
        font-size:small;
        width:60%;
        margin-bottom:10%;
    }

    .rating, .statistics {
         margin-left:5%
    }



}

` 