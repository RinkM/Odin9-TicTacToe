import { useState } from "react";
import { Button } from "reactstrap";
import SettingsFactory from "./SettingsFactory.jsx"





const GameButtons = (props)=>{

  const [settings, setSettings] = props.hookSettings
  const [index, setIndex] = props.hookIndex
  const [gridSize, setGridSize] = props.hookGridSize
  const [gameInformation, setGameInformation] = props.hookInfo

  

  const resetSettings = ()=> {
    setSettings(()=>SettingsFactory(3));
    setIndex((index) => index = 1);
    setGridSize(3)
    settings.update = !settings.update
    setGameInformation(settings.messageList[0])
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
        <Button className='menuButton' onClick = { () => {
          console.log("settings", settings)       }}>
          Display Settings
        </Button>
      </div>
  )
}








  export default GameButtons