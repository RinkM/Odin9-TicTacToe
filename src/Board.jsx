import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from "reactstrap";



// ...but it works. updates the settings.gameLog with box info.

// it's two conditionals stacked on each other.   
// first one blocks writing on already filled indexes (indices). 
// second one updates the gameLog array.
const logTurn = (settings) => {
  settings.props.gameLog[settings.index] == "X" 
  ||settings.props.gameLog[settings.index] == "O" ? {}:

 !settings.props.turnX ? 
 settings.props.gameLog[settings.index] = "X" : 
 settings.props.gameLog[settings.index] = "O"
};


//would it make sense to set the value as the props.gameLog[index]?

const Square = (settings) => {
  const [value, setValue] = useState(false)
  const [gridSize, setGridSize] = useState(settings.gridSize)
  const [update, setUpdate] = useState(settings.update)
  // console.log(settings)
  if (gridSize != settings.gridSize){
    setGridSize(settings.gridSize)
    setValue(false)
    removeHighlights(settings)
  }

  if (update != settings.update){
    setUpdate(settings.update)
    setValue(false)
    removeHighlights(settings)
  }


  const resetValue = ()=>{
    setValue(false)
  }


  const updateValue =() =>{
    console.log("SquareClicked-Settings", settings)
    if ( value =="X" || value =="O") {console.log("already a value here")
      } else if (settings.props.turnX) {
          setValue("X"); 
          settings.props.turnX = (!settings.props.turnX)
        }else {
          setValue("O")
          settings.props.turnX = (!settings.props.turnX)
    }

  logTurn(settings)
  checkforWinner(settings)
  if (checkforDraw(settings.props)) { 
    settings.winner = "draw";
    filterDraw(settings.props)}
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


// Board makes Everything. 
// takes SQAURE and makes it (x) times into a row.
//  takes the row and makes it (X) times too, into a grid. 
// it's loops on loops (or really...maps on maps)
// creates an array from boardSized and uses to repeatedly draw gridRow 
// into the grid. 
// because calling props.props is weird.... is there a better way?
// 
const Board = (settings) =>{
  console.log('board', settings)

let boardKey = 0
let rowKey = 0
let squareCount = 0
return (
  <div className='board' key = {`boardKey${boardKey++}`}>
{[...Array(settings.gridSize).keys()].map((index) => {
    return(
      <div className={`row${index}`}  key = {`rowKey${rowKey++}`} > 
    {[...Array(settings.gridSize).keys()].map((number) => {

      return(
        <Square gridSize = {settings.gridSize} props = {settings.props} key = {squareCount} index = {squareCount++} />
        
      )
      })}
  </div>
  )
  })}
  </div>
)
}





















function checkforWinner (settings){
  console.log("winner", settings.gridSize)
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
      if(settings.props.turnX) {settings.props.winner = "X"}
      else {settings.props.winner = "O"}
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




export default Board




