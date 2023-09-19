import styled from 'styled-components'

export const Body = styled.div`
width:100%;
height:auto;
display: flex;
flex-direction:column;
align-items:center;


.block{
    width:95%;
    height:auto;
    display:flex;
    flex-direction:column;
}


h2{
    color:#f46d1b
}

.carousel-wrapper{
    width:95%;
    margin-top:2.5%;
}
.rec.rec-slider-container{
    width:100%;
    margin:0px;
}

.carousel-wrapper img{
    width:100%;
    z-index:0;
    cursor: pointer;
}



button.rec-dot_active{
  background-color:#F46D1B;
  border-color: #F46D1B;
  box-shadow: #F46D1B 0px 0px 1px 2px;

}

.rec.rec-dot:hover {
    box-shadow: #F46D1B 0px 0px 1px 2px;
}

.animeRow{
    display:flex;
    gap: 2%;
    flex-grow: 1;
    justify-content: space-between;
}

@media(max-width:850px){
   
    .animeRow{
        flex-wrap:wrap;
        justify-content:start;
        
    }
    .animeItem {
    width:168px;
    height:240px;
    }
    
}



@media(max-width:600px){
    .animeRow{
        justify-content:center;
    }
    h2{
        font-size:1rem;
    }

    .animeItem {
    width:142px;
    height:192px;
    }

    .rec.rec-dot{
        height:5px;
        width:5px
    }


    justify-content:space-evenly;
  
}
@media(max-width:500px){
    .animeRow{

    }

    .animeItem {
    width:120px;
    height:154px;
    }
}


`
