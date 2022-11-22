import { useState } from 'react'

import {Button} from "reactstrap";



const Square2 = (settings) => {
    const [value, setValue] = useState(false)
    const [gridSize, setGridSize] = useState(settings.gridSize)
    const [update, setUpdate] = useState(settings.update)
    const [gameInformation, setGameInformation] = settings.hooks
    
  
    const gameInformationText = () => {
      let gameInfo;
      if (settings.props.winner == null) {
        if (settings.props.turnX) {gameInfo = settings.props.messageList[0]
        } else {gameInfo = settings.props.messageList[1]}
      } else if (settings.props.winner == "X") {gameInfo = settings.props.messageList[2];
      } else if (settings.props.winner == "O") {gameInfo = settings.props.messageList[3];
      } else if (settings.props.winner == "draw") {gameInfo = settings.props.messageList[4];
      }
      console.log("gameinfo", gameInformation)
      return gameInfo
    }
  
    if (gridSize != settings.gridSize){
      setGridSize(settings.gridSize)
      setValue(false)
      removeHighlights(settings)
    }
  
    // if (update != settings.update){
    //   setUpdate(settings.update)
    //   setValue(false)
    //   removeHighlights(settings)
    // }
  
  
    const resetValue = ()=>{
      setValue(false)
    }
  
  
    const updateValue =() =>{
      console.log("SquareClicked-Settings", settings)
      settings.props.update = !settings.props.update
      
      if ( value =="X" || value =="O") {console.log("already a value here")
        } else if (settings.props.turnX) {
            setValue("X"); 
            settings.props.turnX = !settings.props.turnX
          }else {
            setValue("O")
            settings.props.turnX = !settings.props.turnX
      }
  
      
      logTurn(settings)
      checkforWinner(settings)
  
      if (!checkforWinner(settings) && checkforDraw(settings.props)) { 
      settings.props.winner = "draw";
      filterDraw(settings.props)
      }
      setTimeout(()=>{setGameInformation(()=> gameInformationText())},"100")
    }
  
    const squareSize = (size)=>{
      if (settings.gridSize >10){size ="smallSquare square"
      } else if (settings.gridSize >6){size ="medSquare square"
      } else {size ="bigSquare square"
      }
      return size
    }
  
    return(
  
        <Button 
          key ={`key${settings.index}`}  
          className={squareSize()} 
          onClick = { () => {updateValue(); 
            }}  
          id= {`square${settings.index}`} >
            {value}
        </Button>
    )
  }
  
  





// ...but it works. updates the settings.gameLog with box info.

// it's two conditionals stacked on each other.   
// first one blocks writing on already filled indexes (indices). 
// second one updates the gameLog array.

//would it make sense to set the value as the props.gameLog[index]?


const logTurn = (settings) => {
    settings.props.gameLog[settings.index] == "X" 
    ||settings.props.gameLog[settings.index] == "O" ? {}:
  
   !settings.props.turnX ? 
   settings.props.gameLog[settings.index] = "X" : 
   settings.props.gameLog[settings.index] = "O"
  };
  
  
  
  
  
  
  
  function checkforWinner (settings){
    
    let winCondits;
    if (settings.gridSize<6){
       winCondits = settings.props.fullLineWins
    }else {
      winCondits = settings.props.connect4Conditions
    }
    winCondits.map((singleArray)=>{
      let winCheck=[]
      singleArray.map((index)=>{
        winCheck.push(settings.props.gameLog[index])
        })
  
      let aWinner = winCheck.every((item)=> item == winCheck[0])
      if (aWinner){
        filterLosers(settings, singleArray);
        if(settings.props.turnX) {
          settings.props.winner = "O"
          } else {settings.props.winner = "X"
          }
          return true
        } else {
          return false
        }
  
      
    })
  } 
  
  
  function checkforDraw(settings){
    const tieGame = (value) => typeof value == "string" ;
    const tieResults =  settings.gameLog.every(tieGame);
  
    return tieResults
  
  }
  
  // uses losersquare to turn them all red...
  function filterDraw(settings){
    settings.fullBoard.map((item)=>{
      const tieSquare = document.getElementById(`square${item}`)
      tieSquare.classList.add("loserSquare")
      tieSquare.disabled
    })
    
  
  }
  
  
  function filterLosers(settings, singleArray){
    
    settings.props.winningSquares = singleArray;
    settings.props.losingSquares = settings.props.fullBoard.filter(item => !singleArray.includes(item));
    console.log(singleArray, "We have a winner!")
    highlightSquares(settings.props)
  
  
  }
  
  
  
  function highlightSquares (settings){
  
    
    settings.losingSquares.map((item)=>{
      const loserSquare = document.getElementById(`square${item}`)
      loserSquare.classList.add("loserSquare")
      
    })
  
    settings.winningSquares.map((item)=>{
      const winningSquare = document.getElementById(`square${item}`)
      winningSquare.classList.add("winnerSquare")
    })
  }
  
  
  function removeHighlights(settings){
    
    const squares = [...document.getElementsByClassName("square")]
  
    for (const item of squares){
      item.classList.remove("winnerSquare")
      item.classList.remove("loserSquare")
    }
  }
  
  




export default Square2