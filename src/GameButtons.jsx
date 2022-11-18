import { useState } from "react";
import { Button } from "reactstrap";






const GameButtons = (props)=>{
    const [number, setNumber] = useState(0);
    
    console.log("boardsizefunc", props.setBoardSize)
    
const sizeButton = ()=>{

  
  if (number >= (props.settings.gameSizes.length)-1){
    setNumber((number) => number = 0); 
  } else {
    setNumber((number) => number + 1)
  }

  console.log(number)

  props.setBoardSize(props.settings.gameSizes[number])
}

    return (
    <div className = "gameButtons">
      <Button onClick={()=> sizeButton() }>  
    Game Size =  {props.settings.boardSize}
    </Button>
  
    <Button onClick = { () => {
      
       console.log("settings", settings) 
       }}>
       Reset doesn't work yet.
    </Button>
    </div>
    )
  
  }
  




// function game2Text(settings) {

//   if (settings.winner == "draw"){
//     return "Draw Game. No one wins."

//   } else if (settings.winner){
//     return `${settings.winner} Wins!`}

//   else if (turnX==true && winner ==null){
//     return "X Turn"
//   }
//   else if (!turnX && winner ==null){
//     return "O turn"
//   }

//   else{
//     return console.log("Message function has gone wrong...")}
// }

// message:[









  export default GameButtons