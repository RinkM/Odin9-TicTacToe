# OdinVite9TicTacToe
TicTacToe with Vite / React
Assignment is found here : https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe
Goal : Build a 3x3 TicTacToe game. 
This is actually a TicTacToe or Connect 4 game. 
It allows the player to change the size of the grid and will change the winning conditions when this happens. 



## 11/22
issue with draw game.  If the last move is a winning move, it returns as a draw, not a win for player.
Reset still doesn't work properly.    should keep the same grid size, but reset the buttons. 

The text for Turn doesn't reset when the grid changes size. 




// !game text displays the text.  text comes from an array of options. when the index changes, it selects a different text.
// would it be better toggle between x / o turns? and make the other messages a different trigger?
// What trigger would change this?  
// By clicking on a square, it changes the message.   -> located under Square... Square changes xTurn true/false value...
// how does it know to change?   Will it change when xTurn changes?
// ? look at SQUARE - Update and Gridsize.   How are they comparable?
// by winning or tie game, it changes the message
// make it a if xTurn = true -> 
// need to change winning conditions to show who the winner is!  either "X" or "O"
//   dont have a draw... what do I need to do for that... look in draw information. 
// 
// instead of using settings.update, what about settings.xTurn?  
// ?it happens every click and I'm already using it in the componant.
// ? but what happens if you reset on X turn?  it stays the same and will it force a redraw?  should it?  it'll have the same message...


// setSettings isn't called... only needs to change on:
// reset and grid size change. Right?
## 11/21
fixed the re-renders. it clears teh squares. How? by passing gridSize and update through the component.   they change and the box resets.

game seems to be working OK.   

things to add : messages. who's playing?  Who won?  rules mesages
players and player names?
menu / settings before the game starts?
continue / back????




need to fix the reset button and grid buttons.    reset should stay the same size, but clear the boxes. 

still need to address teh connect4 wins. 




##Notes
## 11/15
### Accomplishments :
condensed code and cut it into parts.
created settings factory and made it work.

### Issues 
same as 11-13 
and!  the game buttons don't work any more.  trying to pass a setter through the GameButtons component, but no luck.   need more research

## 11/13

can I search and pick squares by value?  All X squares?
### Accomplishments 
* connected win condits for 2 game types
* make game 3, 4, or connect 4 wins
* scroll through game sizes.
* changed the CSS styles for different sized boxes. 
* 
* 
### Known Issues :

* the winning squares are funny when it's a 5 space win.  they only highlight some boxes. breaking out of the .every would stop this... by stopping at the first positive hit, it wouldn't mess with the others.  
* reset button doesn't reset
* connect 4 win conditions are still too broad. 
* ~~clicking on already clicked boxes~~ **HAS BEEN SOLVED**
* game continues after a win condition.
* game doesn't call a tie game...


`this is some codey things `


---

11-12
Not sure where to start...
Here is what I've done : 
* made the connect 4 win conditions, though they are too broad.  think I know how to minimize.   if statements before you include it in final array.

* cleaned up the full line win conditions.
* 'winner' announcement is made.
* added buttons. they do'nt work.


The artificial intelligence algorithms able to strongly solve Connect Four are minimax or negamax, with optimizations that include alpha-beta pruning, move ordering, and transposition tables. The code for solving Connect Four with these methods is also the basis for the Fhourstones[11] integer performance benchmark. 

### TO DO : 
- make buttons work. reset the screen and change game size.
- for AI, can I have the computer 'click' on a square?  wouldn't that do the trick?
- have button go through these options :  tic tac toe, connect 4, and what about that you only have 20 stones game?
- haven't finished one game yet.................
 - what happens on a win?
 - game freezes.  winning things change color.  So and So won the game.
 - reset option / play again. 
 - difficulty options.
 -how to figre out the ai moves?

---
### more notes 11-9   evening.

board renders teh whole game by the grid size.
when clicked, it adds to the array and is tracked. 


the array isn't linked to the win conditions.
the game doesn't have a way to clear or restart game. 
need buttons for that.
am I really passing information that I need to pass through square and board?

how can I change the color? 
or add a win / lose screen component?

or a new game tab?  something like that?


### Notes from 11-9-22
componant Board
return( <square>
<square>
<square>
)

then game renders board 3 times too. 

So....   this doesn't quite work and do what it should.

choices: 
if board size is 5...   [0,1,2,3,4].    use this to map.
build an array the size of the board.
map throughit.

ANswers : https://stackoverflow.com/questions/65198627/how-to-render-react-components-in-a-for-loop

const gameRow = ()=>{
return(

<div> 
[...Array(boardSize).keys()].map((index) =>(
  <Square key = {index} value = {index} className = "square"{index}/>
 </div>
 *the above codebuilds an array like : [0,1,2,3,4]
 * it uses these items as the 'index" but they're not really indexs.
 * It builds 1 row.
 To build a full grid (multiple rows) it will repeat and do 5 more squares with the row.   they will have the same keys...
keys can be unique globably .. may not be a problem.


but same issue with index / ID information

does each square need an ID?       yes.  in order for winning condtions to work.  
so they need to iterate through an array of 3x3 or 5x5 indexes



#### Old OdinVite9TicTacToe
TicTacToe with Vite / React




What I have : 
A square that is drawn blank.
turns into an X on click.   Turns into an O on click.
keeps cycling through.

Doesn't take turns.  It only changes what is there. 


It needs to : 
make a mark depending on turn.  Is it x? or O turn?
report back what the value is.    keep track of the values. 

So...

id = location in the array. or index.
value = the value.
square1.value = 'x'.  square.id = 0
square2.value = 'x'   square.id = 1
square3.value = ''    square.id = 2

boardStatus[square.id] = square.value
initial squares are drawn from empty values. 
As values change, they update the boardStatus array.

boardStatus = {row1: [-,-,-], row2: [-,-,-], row3: [-,-,-]
}

boardStatus.row1[0]

This isn't quite so nice, I don't think.    More of a mouthful while typing. 

boardStatus = [empty,empty,empty,-,-,-,-,-,-,-]

an array with nine 'empty' squares.

As they 









pciking winners depending on size.
and making the array.
5 square grid.
0 1 2 3 4
5 6 7 8 9 
etc
n = grid size.   in this case n = 5

n^2 = 25 = total number of spaces.
boardArray = []

for (let spot=0; spot < n^2; spot++){
boardArray.push(spot).    can I use spot like this?   or a different variable?
regardless, the array becomes [0,1,2,3,4,5] etc.


Finding Row Winners.
Row Winners example : [0,1,2,3,4].   or [5,6,7,8,9]

starting points are 0, 5, 10, 15, 20
starting points are n*0, n*1, n*2, n*3, n*4.   not n*5 or n*n
boardArray[n*0+0,n*0+1,n*0+2,n*0+3,n*0+4]       
boardArray[n*1+0,n*1+1,n*1+2,n*1+3,n*1+4]
in these cases, the starting point changes.  the incremnt (+1, +2 )doesn't. except that the increment max is n-1

something like...
row = 0
increment = 0

## This figures out one row worth (first one) of wins.
for (spot=0;spot <(n-1);spot++){
rowWin = []
let index = n*row+increment
rowWin.push(index).   will eventually return this => [0,1,2,3,4]
increment++
}
return index.   


or return an array with [0,1,2,3,4]
}
# to figure out more than 1 row...

loop = 
{row 0.  (return 1 winning row)
row 1 
}

for (spot=0;spot <(n-1);spot++){
rowWin = []
let index = n*row+increment
rowWin.push(index).   will eventually return this => [0,1,2,3,4]
increment++
}
return index.   



maybe....it only does half the picture.  







