import styled from 'styled-components'

export const Body = styled.div`

    width:5%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#f46d1b;


    > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    
    cursor: pointer;
  }

  @media(max-width:850px){
    width:10%
  }
`