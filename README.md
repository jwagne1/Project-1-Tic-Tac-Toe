# Project-1-Tic-Tac-Toe
### Description
The Tic Tac Toe project is used to put in practice all the applicable methods and tools the SEI student has learned on HTML, CSS, and JavaScript.
The goal of the application is to create a fun and dynamic game of Tic Tac Toe, which the player(s) will find intuitive and engaging.

![TicTacToe Game in process](https://github.com/jwagne1/Project-1-TicTacToe/blob/main/TicTacToe-in-browser.png)

### Getting started
To enjoy the Tic Tac Toe game, the user requires only a web browser and access to internet.

Recommended browsers include: 
* [Firefox](https://www.mozilla.org/en-US/firefox/new/)
* [Chrome](https://www.google.com/chrome/)
* [Safari](https://support.apple.com/downloads/safari)
* [Edge](https://www.microsoft.com/en-us/edge)

### User Stories
* As a user, I should be able to start a new tic tac toe game
* As a user, I should be able to click on a square to add X first and then O, and so on
* As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
* As a user, I should not be able to click the same square twice
* As a user, I should be shown a message when I win, lose or tie
* As a user, I should not be able to continue playing once I win, lose, or tie
* As a user, I should be able to play the game again without refreshing the page

### Technologies used to build the project
HyperText Markup Language (HTML)
Cascading Style Sheets (CSS)
JavaScript
MS Excel - for wireframing and tracking progress

### Planning, Development, and Problem-solving
1. Planning - I started the process reading through the [project assignment respository](https://git.generalassemb.ly/java-interapt-11-8/Project-1), to try to clarify what the scope and expected deliverables were. I then implemented these steps to get organized: 
    * Created an excel file of deliverables to track my progress as I went through the coding process.
    * Created an excel file to use as wireframe for my vision of the webpage.
    * Wrote down basic pseudocode for the different functions I felt were required to make the game work.
2. Development - Started the process by creating empty HTML, CSS, JavaScript, and README files. Once the files were created I followed these steps:
    * Used VS Code app to create Boilerplate HTML code. Created a series of Divs and assigned them individual IDs and a common Class.
    * Linked the HTML file to the _style.css_ and _script.js_ files.
    * In _style.css_ I created a grid for the body of the HTML, and assigned different elements to the appropriate parts of the grid.
    * Once the elements were positioned, I opened _script.js_ and started defining the variables that I would need in order to use within functions and add event listeners to them.
    * From them on, adding code became an iterative process of trying to make different aspects of the game functional, e.g., "I should be able to click on a square to add X first and then O, and so on".
3. Problem-solving - As I moved along and got stuck in several issues not working, I referred back to the advice of the instructors: "Start with what you can make work" and "Make it work, then make it better". To try and solve issues with the code (after some fits of rage and verbal abuse to my computer) I did the following:
    * Defined the issue as best I could and searched for those terms.
    * Went back to some of the GA lessons for examples.
    * Referred back to comments I made in the code of the labs we had in class.
    * Try and try again, then try something different, until finally the issue was solved.
    * Moved onto next bug.
4. To solve for the winner, the function "winner" used an "if else" statement to evaluate each possible scenario for player 1, then for player 2. If no winner was determined then declared a Tie.
5. To clear the board, when "newGameButton" is clicked, function "clearSquare" uses a for loop to delete the innerHTML inside each square, reset the color of the text in "message" below the board, add a starting message in "message" and reset the background of "message". 

### Improvements for future iterations
* Code to be cleaned and completely adhere to DRY. 
* Make webpage 100% mobile friendly. Currently displaying differently in mobile Firefox and Safari.
* Add background music and sound effects in game.
* Use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to persist data locally to allow games to continue after page refresh or loss of internet connectivity.
* Create an AI opponent: teach JavaScript to play an unbeatable game against human.



