import styled from 'styled-components'

export const Body = styled.div`

/* height:35vh; */
display:flex;
flex-direction:column;
align-items:center;
background-size: 100%;
background-repeat: no-repeat;


h1{
    color:white;
    font-size:xxx-large;
    text-indent: -30px;
}

.searcher{
    display:flex;
    align-items:center;
    background-color:transparent;
    border-style:solid;
    border-color: white;
    border-width:3px;
    border-radius:2.5rem;
    color:white;
    outline:none;
    height: 25%;
    position: relative;
    right: 0px;
    font-size: 15px;
    font-weight: bold;
    width:10%
   /*  top: 20px; */
}

img{
    cursor: pointer;
    height:80%
}

.searchIcon{
    color: white;
    top: 10%;
    /* position: absolute; */
    cursor: pointer;
    height:80%;
    width:10%;
}

.searchIcon:active{
    color:gray;
    transition: 0.3s;
}

input{
    background-color:transparent;
    outline:none;
    border-color:transparent;
    color:white;
    font-size: 0.75rem;
    font-weight: bold;
    width:85%;
    padding:1px;
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }


.row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-bottom: -25px;
    align-items:center;
    height:30%;

}

.detailRowBackGround{
    width: 100%;
    margin-bottom:15%;
    background-color:black;
    opacity:0.8;
    display: flex;
    flex-direction: row;
    justify-content:center;
}

.detailRow{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
   
   
}

.detailRow img{
    width:7%;
}


@media(max-width:850px){

    h1{
        font-size:2rem
    }
    input{
        font-size:0.5rem
    }

   

}


    
@media(max-width:700px){
    h1{
        font-size:1rem
    }

    .searcher{
        width:15%
    }


}

@media(max-width:480px){

    .titleRow{
        margin-top:2%;
    }

    .searcher{
        width:20%
    }

    
    margin-bottom:-30px
}



`