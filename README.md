# Odin9-TicTacToe
## TicTacToe with Vite / React

## Preview 
https://codesandbox.io/p/github/RinkM/Odin9-TicTacToe/draft/polished-bush

Assignment is found here : https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe

Goal : Build a 3x3 TicTacToe game. 

## Learning Goals:
Use Factory functions to create objects.
Use React to design the game.  Practice using Hooks and passing information through.

## Notes 
I wanted to go above and beyond.  Assignment calls for Javascript Vanilla, but I made this using React. Also, it's not just a TicTacToe game.  It is also a Connect 4 game because it allows the player to change the size of the grid. It will also change the winning conditions when this happens. 

## Things I learned
* I got more practice with React.  
  - how siblings interact and how parents connect them.
  - how components update and affect others. 
  - passing arguments through components. (PROPS)
* factory functions 
  - practiced making objects. 
* more css and style practice.
* some logic to find win conditions.
* [...] spread syntax.  and [...Array]




## 11/25

I'm broadly done with the game. 
There are a number of hooks that are drilled(threaded?) through the components. It would be smart to use Redux.  (or Flux?)
but it's also just a tictactoe game....  with 6 components.  I can keep track of the hooks, I say, overconfidently.

also, there is an issue with rendering upon reset / gridchange..   It doesn't stop the game, so I've left it for now.


 Today I : 

* fixed reset button. 
* added win conditions.
* cleaned up a lot of the code. 
* fixed the connect 4 wins.  
* fixed the draw game + winner problem.
* Fixed double wins.  They all show as winning

To finalize this, I still need to : 

* fix the react render error code.
* Add an AI?   (Not required, but interesting.)
* Fix the draw game message when there is a winner... **Fixed**
* fix double wins or 5 space wins.   **Fixed**








## 11/22
issue with draw game.  If the last move is a winning move, it returns as a draw, not a win for player.
Reset still doesn't work properly.    should keep the same grid size, but reset the buttons. 

The text for Turn doesn't reset when the grid changes size. 

Add game rules. 3 in a row wins. Connect 4. etc. 
change the game size button to a slider?  pull down.  something different. toggle game
still need to fix diagonal win condits. 



## 11/21
fixed the re-renders. it clears the squares. How? by passing gridSize and update through the component.   they change and the box resets.

game seems to be working OK.   

things to add : messages. who's playing?  Who won?  rules mesages
players and player names?
menu / settings before the game starts?
continue / back????




need to fix the reset button and grid buttons.    reset should stay the same size, but clear the boxes. 

still need to address teh connect4 wins. 




## Old Notes
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

### Known Issues :

* the winning squares are funny when it's a 5 space win.  they only highlight some boxes. breaking out of the .every would stop this... by stopping at the first positive hit, it wouldn't mess with the others.   
* reset button doesn't reset **HAS BEEN SOLVED**
* connect 4 win conditions are still too broad.  **HAS BEEN SOLVED**
* ~~clicking on already clicked boxes~~ **HAS BEEN SOLVED**
* game continues after a win condition. **HAS BEEN SOLVED**
* game doesn't call a tie game...**HAS BEEN SOLVED**





