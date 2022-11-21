import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './Board'
import {Button} from "reactstrap"; 
import SettingsFactory from "./SettingsFactory.jsx"
import GameButtons from './GameButtons';

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
        <Board key = "0" gridSize = {gridSize} props={settings}/>
      </div>
  )
}



// !game text displays the text.  text is an array of options. when the index changes, it selects a different text.
// would it be better toggle between x / o turns? and make the other messages a different trigger?
// 
// 
// 
// 
const GameText = (settings)=>{
  const [text, setText] = useState()
  const [messageIndex, setMessageIndex] = useState(0)
  setText(settings.messageList[messageIndex])
  
  const update
  
  return (
    <div className = "gameText" > {text} </div>
    )

}






//     messageList: ["Turn: X", "Turn: O", "Winner: X", "Winner: O", "Draw"],
//     }





























export default Game



