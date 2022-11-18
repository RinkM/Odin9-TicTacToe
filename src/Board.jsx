import { useState } from 'react'
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

 settings.props.turnX ? 
 settings.props.gameLog[settings.index] = "X" : 
 settings.props.gameLog[settings.index] = "O"
};


//would it make sense to set the value as the props.gameLog[index]?

const Square = (settings) => {

  const [value, setValue] = useState(false)

  const updateValue =() =>{
    if ( value =="X" || value =="O") {console.log("already a value here")
      } else if (settings.props.turnX) {
          setValue("X"); 
          settings.props.turnX = (!settings.props.turnX)
        }else {
          setValue("O")
          settings.props.turnX = (!settings.props.turnX)
    }

  logTurn(settings)
  checkforWinner(settings.props)
  if (checkforDraw(settings.props)) {filterDraw(settings.props)}

  }

  const squareSize = (size)=>{
    if (settings.props.boardSize >10){size ="smallSquare"
    } else if (settings.props.boardSize >6){size ="medSquare"
    } else {size ="bigSquare"
    }
    return size
  }

  return(

      <Button key ={`key${settings.index}`}  className={squareSize()} onClick = { () => {updateValue(); 
      }}  id= {`square${settings.index}`} >
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

  
let boardKey = 0
let rowKey = 0
let squareCount = 0
return (
  <div className='board' key = {`boardKey${boardKey++}`}>
{[...Array(settings.props.boardSize).keys()].map((index) => {
    return(
      <div className={`row${index}`}  key = {`rowKey${rowKey++}`} > 
    {[...Array(settings.props.boardSize).keys()].map((number) => {
      return(
        <Square props = {settings.props} key = {squareCount} index = {squareCount++} value = "empty" />
      )
      })}
  </div>
  )
  })}
  </div>
)
}

function checkforWinner (settings){
  // console.log(settings)
  let winCondits;
  if (settings.boardSize<6){
     winCondits = settings.fullLineWins
  }else {
    winCondits = settings.connect4Conditions
  }
  // if (settings.boardSize <6){
  winCondits.map((singleArray)=>{
    let winCheck=[]
    singleArray.map((index)=>{
      winCheck.push(settings.gameLog[index])
      })

    let Awinner = winCheck.every((item)=> item == winCheck[0])
    
    Awinner ? 
      filterLosers(settings, singleArray)
      :{}
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
  settings.winningSquares = singleArray;
  settings.losingSquares = settings.fullBoard.filter(item => !singleArray.includes(item));
  console.log(singleArray, "We have a winner!")
  highlightSquares(settings)


}



function highlightSquares (settings){
  settings.winningSquares.map((item)=>{
    const winningSquare = document.getElementById(`square${item}`)
    winningSquare.classList.add("winnerSquare")
  })
  
  settings.losingSquares.map((item)=>{
    const loserSquare = document.getElementById(`square${item}`)
    loserSquare.classList.add("loserSquare")
    loserSquare.disabled
  })
}





export default Board




