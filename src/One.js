import React, { useState } from 'react'
import Data2 from "./Data2"
import Data from "./Data"

function One() {
    var[content,setContent]=useState(Data)

    function set(){
        setContent(Data)

    }
    function set2(){
        setContent(Data2)

    }
  return (
    
    <div id="row">
        {
            content.map(function(path){
                return(
                    <img src={path} alt="image" />

                )
            })
        }
        <br/>
        <div><button onClick={set}>Male</button>
        <button onClick={set2}>Female</button></div>
    </div>
    
    
  )
}

export default One