import { useEffect, useState } from 'react'
import Board from './Board'
import SettingsFactory from "./SettingsFactory.jsx"
import GameButtons from './GameButtons';
import WinConditions from './WinConditions';



function Game() {
  const [settings, setSettings] = useState(()=>SettingsFactory(3))
  const [index, setIndex] = useState(1); 
  const [gridSize, setGridSize] = useState(3); 
  const [gameInformation, setGameInformation] = useState(settings.messageList[0])
  const [winConditionsMessage, setWinConditionsMessage] = useState(settings.winConditionsMessage)
  const [resetGame, setResetGame] = useState(false)



  return (
      <div className='gameSpace'>

        <GameButtons hookWinMsg = {[winConditionsMessage, setWinConditionsMessage]} hookReset = {[resetGame, setResetGame]} hookInfo = {[gameInformation, setGameInformation]} hookSettings = {[settings, setSettings]} hookIndex = {[index, setIndex]} hookGridSize = {[gridSize, setGridSize]}   />
        <WinConditions hookWinMsg = {[winConditionsMessage, setWinConditionsMessage]} hookGridSize = {gridSize}/>
        <div className = "gameText" > {gameInformation} </div>
        <Board hookReset = {[resetGame, setResetGame]} hooks = {[gameInformation, setGameInformation] } key = "0" gridSize = {gridSize} props={settings}/>
        
      </div>
  )
}



export default Game
