import styled from 'styled-components';

export const Body = styled.div`
  background-color: #f46d1b;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 200px;
  z-index:2;
 
  
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 5px;
    margin-left: 160px;
    cursor: pointer;
  }
  
  h2{
    display:flex;
    align-items:center;
    gap:6px;
    margin-top:80px;
    margin-left:25px;
    color: white;
  }

  .icon{
    width:18px
  }

  .content{
    color:rgb(240, 240, 240);
    width:100%;
    height:90%;
    overflow:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .content::-webkit-scrollbar{
    display:none;
    background-color:#f46d1b
  }

  .content p{
    background-color: #ff811c;
    border-radius: 2.5rem;
    display: flex;
    width: 55%;
    box-shadow: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    height: 32px;
    justify-content: center;
    cursor:pointer;
    user-select: none;
  }

  .content p:hover{
    color:black;
    transition: 0.3s;
  }

  .content p:active{
    background-color:white;
    color:red;
  }

  
  .content::-webkit-scrollbar-thumb{
    border-radius:10px;
    background-color:#333
  }

  .content::-webkit-scrollbar-track{
    display: none;
  }

  
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 200px;
    }
  }

 
`;

