import { useState } from "react"
import { Body } from "./style"
import Sidebar from './sideBar/index.js'
import {FaBars} from 'react-icons/fa'

export default function Aside(){
    const [showSideBar, setShowSideBar] = useState(false)
    const handleShowSideBar = () => setShowSideBar(!showSideBar)


return(
    <Body>
        <FaBars onClick={handleShowSideBar}/>
        {showSideBar && <Sidebar active={setShowSideBar}/>}
    </Body>
)

}