
import Aside from './components/layout/aside/index.js';
import Footer from './components/layout/footer/index.js';
import Header from './components/layout/header/index.js'
import {Body} from './style/style.js'
import MyRoutes from './routes.js';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return(
    <BrowserRouter>
      <div style={{position:"relative"}}>
        <Body>
          <Aside/>
          <div style={{display: "flex", flexDirection: "column", width:"100%"}}>
            <Header/>
            <MyRoutes/>  
          </div>  
        </Body>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
