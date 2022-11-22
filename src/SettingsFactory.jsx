

// 




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
    gameSizes: [3, 4, 7, 20, 2],
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
  // console.log("fullLineWins", settings.fullLineWins)
  return winConditions
  }
  
  
  
  function find4Wins(gridSize, settings){
  let winConditions = []
  
  settings.gameLog.map((num) => {
    let rowWins = [];
    let colWins = [];
    let diagRight = [];
    let diagLeft = [];
  
    for (let a = 0; a <4; a++){
      rowWins.push(num+a)
      colWins.push(num+(a*gridSize))
      diagRight.push(num+(a*gridSize)+a)
      diagLeft.push(num +(a*gridSize)-a)
    }
  
    winConditions.push(rowWins)
    winConditions.push(colWins)
    winConditions.push(diagRight)
    winConditions.push(diagLeft)
  })
  
  // console.log("ER - Prints Twice...connect4Wins", settings.connect4Conditions)
  
  return winConditions
  }
  
  

  



export default SettingsFactory


