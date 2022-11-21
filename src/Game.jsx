import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './Board'
import {Button} from "reactstrap"; 
import SettingsFactory from "./SettingsFactory.jsx"
import GameButtons from './GameButtons';


// !game text displays the text.  text comes from an array of options. when the index changes, it selects a different text.
// would it be better toggle between x / o turns? and make the other messages a different trigger?
// What trigger would change this?  
// By clicking on a square, it changes the message.   -> located under Square... Square changes xTurn true/false value...
// how does it know to change?   Will it change when xTurn changes?
// ? look at SQUARE - Update and Gridsize.   How are they comparable?
// by winning or tie game, it changes the message
// make it a if xTurn = true -> 
// need to change winning conditions to show who the winner is!  either "X" or "O"
//   dont have a draw... what do I need to do for that... look in draw information. 
// 
// instead of using settings.update, what about settings.xTurn?  
// ?it happens every click and I'm already using it in the componant.
// ? but what happens if you reset on X turn?  it stays the same and will it force a redraw?  should it?  it'll have the same message...

const GameText = (settings)=>{
  const [update, setUpdate] = useState(settings.update)
  const [messageIndex, setMessageIndex] = useState(0)

  
  if (update != settings.update){
    setUpdate(settings.update)
    setValue(false)
    removeHighlights(settings)
  }
  
  
//   Does this need to be in a function?
  if (winner == null) {
    if (settings.xTurn) {setMessageIndex(0)
    } else if (!settings.xTurn){setMessageIndex(1)}
  }else if (winner == "X"){ setMessageIndex(2)
  } else if (winner == "O"){setMessageIndex(3)
  } else if (winner == "draw"){setMessageIndex(4)
  }
  


  let text = settings.messageList[messageIndex]  

  
  return (
    <div className = "gameText" > {text} </div>
    )

}

//     messageList: ["Turn: X", "Turn: O", "Winner: X", "Winner: O", "Draw"],
//     }


// !! Stuff was added above.


// setSettings isn't called... only needs to change on:
// reset and grid size change. Right?
function Game() {
  const [settings, setSettings] = useState(()=>SettingsFactory(3))
  const [index, setIndex] = useState(1); 
  const [gridSize, setGridSize] = useState(3); 

// ! change the settings factory and gridSize to what they already are.  How to find?
// setting them as gridSize didn't work....
  const resetSettings = ()=> {
    setSettings(()=>SettingsFactory(3));
    setIndex((index) => index = 1);
    setGridSize(3)
    settings.update = !settings.update
  }

  const gridSizeButton = ()=>{  
    if (index >= (settings.gameSizes.length)-1){
      setIndex((index) => index = 0); 
  } else {
      setIndex((index) => index + 1)
  }
  setSettings(()=>SettingsFactory(settings.gameSizes[index]));
  setGridSize(settings.gameSizes[index])
  

 }
   
  return (
      <div className='gameSpace'>

        
        <div className = "gameButtons">
          <Button className='menuButton' onClick={()=> gridSizeButton() }>Game Size =  {gridSize}</Button>
          <Button className='menuButton' onClick = { () => resetSettings()}>
             Reset
          </Button>
          
          <Button className='menuButton' onClick = { () => {
            console.log("settings", settings)       }}>
             Display Settings
          </Button>
        </div>

// ! This was added!
        <GameText props = {settings}

        <Board key = "0" gridSize = {gridSize} props={settings}/>
      </div>
  )
}
















export default Game



