import { styled } from "styled-components";


export const Body = styled.div`
margin-top:2%;
width:100%;
height:auto;
margin-bottom:1.5%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;


.row{
    width:95%;
    display:flex;
    align-items:center;
    justify-content:start;
    gap:10px;
    flex-wrap: wrap;
  
}



/*
.row >*{
    width:95%;
    flex-wrap: wrap;
    display:flex;
    align-items:center;
}
*/

h2 {
    color:#f46d1b;
}


.buttonRow{
    display: flex;
    width: 95%;
    justify-content: end;
}

.animeItem{
    flex-grow:1;
    width:284px;
    height:402px;

   /* width:224px;
    height: 320px; */
}


.titleRow{
    width:95%;
    display: flex;
    justify-content:start;
}

.animeRowList *{
    margin-right:0.5%;
}

@media(max-width:1300px){
    .row{
        width:90%
    }
    .animeItem {
    width:224px;
    height: 320px;
}
}
@media(max-width:800px){
    .row{
        width:80%
    }

    .animeItem {
    width:168px;
    height:240px;
    }
   
}

@media(max-width:500px){
    .animeItem {
    width:142px;
    height:192px;
    }
}

@media(max-width:400px){
    .row{
        width:95%;
    }
}




`
