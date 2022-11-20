

// 




const SettingsFactory = (size) => {
    const defaultSettings = {
    turnX: true,
    winner: null,
    boardSize: size,
    difficulty: 1,
    wins: [],
    fullLineWins: [],
    connect4Conditions: [],
    gameSizes: [2, 3, 4, 5, 6, 7, 22],
    gameMessage: "",
    messageList: ["Turn: X", "Turn: O", "Winner: X", "Winner: O", "Draw"],
    }
    defaultSettings.gameLog = [...Array(defaultSettings.boardSize**2).keys()]
    defaultSettings.fullBoard = [...Array(defaultSettings.boardSize**2).keys()];
    defaultSettings.fullLineWins = fullLineWins(defaultSettings)
    defaultSettings.connect4Conditions = find4Wins(defaultSettings)

  return defaultSettings
  }
  
  
  
  function fullLineWins (settings){
  let winConditions = []  ;
  let diag1 = [];
    let diag2 = [];
    let rowWin = [];
    let columnWin = [];
    settings.fullLineWins = []
   
  
  for (let a=0; a < (settings.boardSize); a++){
    rowWin = [];
    columnWin = []
    
    let diag1Index = (settings.boardSize+1)*a;
    let diag2Index = ((settings.boardSize-1)*a +(settings.boardSize-1));
    diag1.push(diag1Index);
    diag2.push(diag2Index);
    
    for (let b=0; b < (settings.boardSize); b++){
      let rowIndex = (settings.boardSize*a) + b;
      let columnIndex = (settings.boardSize*b) + a;
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
  
  
  
  function find4Wins(settings){
  let winConditions = []
  
  settings.gameLog.map((num) => {
    let rowWins = [];
    let colWins = [];
    let diagRight = [];
    let diagLeft = [];
  
    for (let a = 0; a <4; a++){
      rowWins.push(num+a)
      colWins.push(num+(a*settings.boardSize))
      diagRight.push(num+(a*settings.boardSize)+a)
      diagLeft.push(num +(a*settings.boardSize)-a)
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


