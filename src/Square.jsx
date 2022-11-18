import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from "reactstrap";


let boardSize = 6;

// the hook should become the XTURN variable... it turns true or false, depending on turn

// Square sets turnX as true or false.  returns the mark variable as X or O.
// changes on click !turnX
// uses a 2 level conditional ? : ? 

const gameLog = [...Array(boardSize**2).keys()]


// how to fix the turnX problem on first click.  
// how to change sturns?   
// TurnX needs to be outside of Square.   It needs to be a more 
// global variable so that you can see it on the side of the screen.
// 
// 
// 
// 
// 
// 

const logTurn = (props, turnX) => { 
    turnX ? gameLog[props.index] = "X" : gameLog[props.index] = "O"
    // console.log("value.value",value)
    console.log(gameLog)

}

const Square = (props) => {
    const [turnX, setTurnX] = useState(true)
    const [value, setValue] = useState(false)
    
    const updateValue =(turnX) =>{
    turnX ? setValue("X"): setValue("O")
    setTurnX(!turnX)
    }

    return(
        <Button className='square' onClick = { () => {logTurn(props, turnX), updateValue(turnX); 
        }}  id= {`square${props.index}`} >
            {value}
        </Button>
    )
}















export default Square