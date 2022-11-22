import { useEffect, useState } from 'react'


import Board from './Board'

import SettingsFactory from "./SettingsFactory.jsx"

import GameButtons from './GameButtons';




function Game() {
  const [settings, setSettings] = useState(()=>SettingsFactory(3))
  const [index, setIndex] = useState(1); 
  const [gridSize, setGridSize] = useState(3); 
  const [gameInformation, setGameInformation] = useState(settings.messageList[0])

  return (
      <div className='gameSpace'>

        <GameButtons hookInfo = {[gameInformation, setGameInformation]} hookSettings = {[settings, setSettings]} hookIndex = {[index, setIndex]} hookGridSize = {[gridSize, setGridSize]}   />

        <div className = "gameText" > {gameInformation} </div>
        <Board hooks = {[gameInformation, setGameInformation] } key = "0" gridSize = {gridSize} props={settings}/>
      </div>
  )
}
















export default Game



