import React from "react" ; 
import Meme from "../images/Meme.webp" ; 

function Header () {
    return (
    <>
    <nav className="nav-bar">  
       <div className="main-nav"> 
       <img className="meme-logo" src = {Meme}  alt = "Meme-Logo"/> 
       <h1 className="head"> Memes Generator </h1>
       </div>
       <div className="sub-nav"> 
        <h3 className="sub-head">React Project - 2</h3>
       </div>
    </nav> 
    
    </>    )
}


export default Header ; 





