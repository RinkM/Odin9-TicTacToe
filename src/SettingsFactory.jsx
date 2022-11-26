
const SettingsFactory = (gridSize) => {
    const defaultSettings = {
    turnX: true,
    winner: null,
    update:false,
    boardSize: gridSize,
    difficulty: 1,
    wins: [],
    fullLineWins: [],
    connect4Conditions: [],
    gameSizes: [3, 4, 7, 10, 20],
    messageList: ["Turn: X", "Turn: O", "Winner: X", "Winner: O", "Draw"],
    }
    defaultSettings.gameLog = [...Array(gridSize**2).keys()]
    defaultSettings.fullBoard = [...Array(gridSize**2).keys()];
    defaultSettings.fullLineWins = fullLineWins(gridSize, defaultSettings)
    defaultSettings.connect4Conditions = find4Wins(gridSize, defaultSettings)
    
  return defaultSettings
  }

function fullLineWins (gridSize, settings){
  let winConditions = []  ;
  let diag1 = [];
    let diag2 = [];
    let rowWin = [];
    let columnWin = [];
    settings.fullLineWins = []
   
  
  for (let a=0; a < (gridSize); a++){
    rowWin = [];
    columnWin = []
    
    let diag1Index = (gridSize+1)*a;
    let diag2Index = ((gridSize-1)*a +(gridSize-1));
    diag1.push(diag1Index);
    diag2.push(diag2Index);
    
    for (let b=0; b < (gridSize); b++){
      let rowIndex = (gridSize*a) + b;
      let columnIndex = (gridSize*b) + a;
      rowWin.push(rowIndex);
      columnWin.push(columnIndex);
      }
  
  
    
    winConditions.push(rowWin)
    winConditions.push(columnWin)
  }
  winConditions.push(diag1)
  winConditions.push(diag2)
  
  return winConditions
  }
  
  
  
function find4Wins(gridSize, settings){
  let winConditions = []
  let noWinLeftDiag = []
  let noWinRightDiag = []

  for (let a = 0; a<gridSize; a++){
    noWinLeftDiag.push((gridSize*a)+0)
    noWinLeftDiag.push((gridSize*a)+1)
    noWinLeftDiag.push((gridSize*a)+2)
  }

  for (let b = 0; b<gridSize; b++){
    noWinRightDiag.push((gridSize*b)+(gridSize)-3)
    noWinRightDiag.push((gridSize*b)+(gridSize)-2)
    noWinRightDiag.push((gridSize*b)+(gridSize)-1)
  }
  
  settings.gameLog.map((index) => {
    let rowWins = [];
    let colWins = [];
    let diagRight = [];
    let diagLeft = [];
  
    for (let a = 0; a <4; a++){
      rowWins.push(index+a)
      colWins.push(index+(a*gridSize))
      diagRight.push(index+(a*gridSize)+a)
      diagLeft.push(index +(a*gridSize)-a)
  }
  
    winConditions.push(rowWins)
    winConditions.push(colWins)
    if (!noWinRightDiag.includes(index)){
      winConditions.push(diagRight)}
    if (!noWinLeftDiag.includes(index)){
      winConditions.push(diagLeft)
    }
    
  })
  
  
  
  return winConditions
  }
  




export default SettingsFactory

