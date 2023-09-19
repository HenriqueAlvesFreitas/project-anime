import styled from 'styled-components'

export const Body = styled.div`


background-color:#262626;
position:absolute;
width: 100%;
min-height: 35vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
z-index:0;


.row{
    /* position:absolute; */
    display:flex;
    align-items:center;
    flex-direction:column;
    width: 100%;
    /* top:-12%; */
    margin-top:-6%;
}

.row img{
    width:15%;
}


.row .p{
font-weight: 700;
font-size: large;
margin:0px;
}

.p.p1{
    color:white;
    margin-top:0.5%;
}
.p.p2{
    color: #318b3a;
}

.row button{
    border-style: solid;
    color: #f46d1b;
    border-width: 3px;
    width: 10%;
    border-color: #f46d1b;
    margin-top: 0.5%;
    font-weight: 700;
    padding: 5px;
    background-color: #262626;
    cursor:pointer;
}

.row button:hover{
    background-color:#f46d1b;
    color: #262626;
    transition: 0.3s;
}

.row button:active{
    background-color:white;
    border-color:white;
    color:#f46d1b;
}

.row2{
    width: 95%;
    display: flex;
    flex-direction: row;
  /*   padding-top: 8%; */
    align-items: center;
    justify-content: space-between;
}

.row2 p{
    color:white;
    font-weight: lighter;
    font-size: smaller;
}

@media(max-width:950px){
    .row{
        margin-top:-20%;
    }

    .row img{
        width:25%
    }

    .row .p{
        font-size:1rem;
    }

    .row button{
        width:20%;
    }

}

@media(max-width:500px){
    .row{
        margin-top:-20%;
    }

    .row img{
        width:30%
    }

    .row .p{
        margin-top:2%;
        font-size:1rem;
    }

    .row button{
        margin-top:4%;
        width:25%;
    }
}

@media(max-width:400px){
    .row{
        margin-top:-15%;
    }

    .row img{
        width:30%
    }

    .row .p{
        margin-top:2%;
        font-size:0.8rem;
    }

    .row button{
        margin-top:4%;
        width:25%;
    }
}


`
