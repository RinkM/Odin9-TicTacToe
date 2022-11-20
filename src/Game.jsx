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


  const resetSettings = ()=> {
    setSettings(()=>SettingsFactory(3));
    setIndex((index) => index = 1);
  }

  const updateSettings = (num)=>{
    setSettings(()=>SettingsFactory(num))
  }
  

  const sizeButton = ()=>{  
    if (index >= (settings.gameSizes.length)-1){
      setIndex((index) => index = 0); 
  } else {
      setIndex((index) => index + 1)
  }
  // settings.boardSize = settings.gameSizes[number]
  updateSettings(settings.gameSizes[index])
 }
   
  return (
      <div className='gameSpace'>
        <div className = "gameButtons">
          <Button className='menuButton' onClick={()=> sizeButton() }>Game Size =  {settings.boardSize}</Button>
          <Button className='menuButton' onClick = { () => resetSettings()}>
             Reset
          </Button>
          
          <Button className='menuButton' onClick = { () => {
            console.log("settings", settings)       }}>
             Display Settings
          </Button>
    </div>
        {/* <div>
          <GameButtons updateSettings = {updateSettings} setSettings = {setSettings} settings = {settings}/> 
        </div> */}
          <Board key = "0" props={settings}/>
          
      </div>
  )
}









































export default Game







//! Outdated Code below : 

// // needs constraints for the sides.  
// // if the starting # is x for the array, then you trash it?
// // 
// function find4Wins(settings){
//   settings.connect4Conditions = []

//   settings.gameLog.map((num) => {
//     let rowWins = [];
//     let colWins = [];
//     let diagRight = [];
//     let diagLeft = [];

//     for (let a = 0; a <4; a++){
//       rowWins.push(num+a)
//       colWins.push(num+(a*settings.boardSize))
//       diagRight.push(num+(a*settings.boardSize)+a)
//       diagLeft.push(num +(a*settings.boardSize)-a)
//     }

//     settings.connect4Conditions.push(rowWins)
//     settings.connect4Conditions.push(colWins)
//     settings.connect4Conditions.push(diagRight)
//     settings.connect4Conditions.push(diagLeft)
//   })
  
//   // console.log("ER - Prints Twice...connect4Wins", settings.connect4Conditions)
// }




// function fullLineWins (settings){
//     let diag1 = [];
//     let diag2 = [];
//     let rowWin = [];
//     let columnWin = [];
//     settings.fullLineWins = []
   

//   for (let a=0; a < (settings.boardSize); a++){
//     rowWin = [];
//     columnWin = []
    
//     let diag1Index = (settings.boardSize+1)*a;
//     let diag2Index = ((settings.boardSize-1)*a +(settings.boardSize-1));
//     diag1.push(diag1Index);
//     diag2.push(diag2Index);
    
//     for (let b=0; b < (settings.boardSize); b++){
//       let rowIndex = (settings.boardSize*a) + b;
//       let columnIndex = (settings.boardSize*b) + a;
//       rowWin.push(rowIndex);
//       columnWin.push(columnIndex);
//       }


    
//     settings.fullLineWins.push(rowWin)
//     settings.fullLineWins.push(columnWin)
//   }
//   settings.fullLineWins.push(diag1)
//   settings.fullLineWins.push(diag2)
//   // console.log("fullLineWins", settings.fullLineWins)
// return 
// }

