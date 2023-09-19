import React from "react";
import {Route,Routes} from "react-router-dom";


import Home from "./pages/home/index.js";
import AnimeDetail from "./pages/animeDetail/index.js";
import AnimeList from "./pages/animeList/index.js";
import NotFound from "./pages/notFound/index.js";



const MyRoutes = () =>{
    return(
      
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/anime/:id" element={<AnimeDetail/>}/>
                <Route path= "anime-list" element={<AnimeList/>}/>
                <Route path= "anime-list/:filter" element={<AnimeList/>}/>
                <Route path= "anime-search-list/:search" element={<AnimeList/>}/>
                <Route path= "/*" element={<NotFound/>}/>
            </Routes>
       
    )
}

export default MyRoutes

