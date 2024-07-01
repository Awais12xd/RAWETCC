import React from "react";
import './container.css'

function Container ({children}){

    return(
       <>
       <div className="cont">
       {children}
       </div>
       
       </> 
    )
}


export default Container;