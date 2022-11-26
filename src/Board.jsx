
import Square from './Square';

// Board makes Everything. 
// takes SQAURE and makes it (gridsize) times into a row.
//  takes the row and makes it (gridsize) times too, into a grid. 
// it's loops on loops (or really...maps on maps)
// creates an array from boardSized and uses to repeatedly draw gridRow 
// into the grid. 

const Board = (settings) =>{


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
        <Square gridSize = {settings.gridSize} props = {settings.props} hooks = {settings.hooks} hookReset = {settings.hookReset}  key = {squareCount} index = {squareCount++} />
        
      )
      })}
  </div>
  )
  })}
  </div>
)
}





export default Board


