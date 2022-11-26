import { useState } from "react";




const WinConditions = (props)=>{
    const [winConditionsMessage, setWinConditionsMessage] = props.hookWinMsg
    
    
    const updateText  = (gridSize)=>{
        
        if (gridSize >3){setWinConditionsMessage("4 in a row wins!")
    
        }else {setWinConditionsMessage("3 in a row wins!")}
      }

      updateText(props.hookGridSize)
    return (
        <div className="gameText">
        {winConditionsMessage}
        </div>
        
    )
}

export default WinConditions