import { useState } from "react";
import { Button } from "reactstrap";
import SettingsFactory from "./SettingsFactory.jsx"


const GameButtons = (props)=>{

  const [settings, setSettings] = props.hookSettings
  const [index, setIndex] = props.hookIndex
  const [gridSize, setGridSize] = props.hookGridSize
  const [gameInformation, setGameInformation] = props.hookInfo
  const [resetGame, setResetGame] = props.hookReset
  

  const resetSettings = ()=> {
    setResetGame(true)
    setSettings(()=>SettingsFactory(gridSize));
    setGameInformation(settings.messageList[0])
    console.log('buttonpress')
  }
  
  const gridSizeButton = ()=>{  
    if (index >= (settings.gameSizes.length)-1){
      setIndex((index) => index = 0); 
  } else {
      setIndex((index) => index + 1)
  }
  setSettings(()=>SettingsFactory(settings.gameSizes[index]));
  setGridSize(settings.gameSizes[index])
  setGameInformation(settings.messageList[0])
  }




  return (
    <div className = "gameButtons">
        <Button className='menuButton' onClick={()=> gridSizeButton() }>Game Size =  {gridSize}</Button>
        <Button className='menuButton' onClick = { () => resetSettings()}>
          Reset</Button>
        <Button className='menuButton' onClick = { () => {console.log("settings", settings)}}>
          Display Settings</Button>
      </div>
  )
}


  export default GameButtons