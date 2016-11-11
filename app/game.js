angular.module('con4', [])
	.component('gameComponent', {
		templateUrl: 'app/game.html',
		controller: GameController
	})

function GameController() {

		var gc = this

		gc.newGame = function () {
		/**
		 * set victory to false
		 * gc.grid = buildGrid();
		 * This is connect 4 so red plays first
		 */
		}

		function buildGrid() {
		//Build a 6x7 grid object and return it from this function
		//Each cell of the grid is an object that knows its coords
		/**
		 * Cell Schema
		 * {
		 * 		row: number,
		 * 		col: number
		 * }
		 */

		//Once you finishe building your grid make sure gc.newGame is setting 
		//gc.grid = buildGrid();
		//If your build grid is working correctly you can start up your server to see the grid
		//drawn to the screen.
		}

		gc.dropToken = function (col) {
		//The col is passed in from the view
		//Column is full no space available
		//Bad Drop
		if (gc.grid[0][col].hasToken) {
			return;
		}

		//Find the southMost unoccupied row
		/**
		 * Always start at row 0 and then increment
		 * until you have reached the final row or 
		 * found a cell that already has a token
		 */
		var row = checkSouth(0, col);

		/**
		 * Once the row is identified
		 * set the cell by accessing 
		 * gc.grid[row][col]
		 * set cell.hasToken = true
		 * set cell.color gc.activePlayer
		 **/

		//endTurn and checkVictory
		}

		function checkSouth(row, col) {
		/**
		 * Let's use recursion
		 * A recursive function is...
		 * a function that calls itself
		 * until some condition is met
		 * 
		 * Check South will need essentially two base cases
		 * 
		 */

		//Base case 1 found south Token return row - 1 to go back one step

		//base case 2 reached bottom of grid return row or 5

		/**
		 * if neither base case 
		 * (***increment row***, then return checkSouth())
		 * make sure to pass the arguments through
		 */
		}

		function checkVictory(cell) {
		//This one is a gimme you shouldn't have to change anything here
		//Once you fix the checkNextCell function the green squiggles should dissapear.
		//If they don't make sure you are returning a number from the checkNextCell function

		var horizontalMatches = 0;
		//Check Horizontal
		horizontalMatches += checkNextCell(cell, 0, 'left');
		horizontalMatches += checkNextCell(cell, 0, 'right');

		//Check Vertical
		var verticalMatches = 0;
		verticalMatches += checkNextCell(cell, 0, 'bottom');

		//Check DiagLeftUp and RightDown
		var diagLeft = 0;
		diagLeft += checkNextCell(cell, 0, 'diagUpLeft');
		diagLeft += checkNextCell(cell, 0, 'diagBotRight');

		//Check DiagRigthUp and LeftDown
		var diagRight = 0;
		diagRight += checkNextCell(cell, 0, 'diagUpRight');
		diagRight += checkNextCell(cell, 0, 'diagBotLeft');

		if (verticalMatches >= 3 || horizontalMatches >= 3 || diagLeft >= 3 || diagRight >= 3) {
			//You can do better than an alert 
			alert(cell.color + ' Wins');
		}
		}

		function getNextCell(cell, direction) {
		/**
		 * var nextRow = cell.row;
		 * var nextCol = cell.col;
		 * 
		 * adjust the values of nextRow
		 * and nextCol as needed based upon
		 * the direction of travel.
		 * 
		 * if nextRow > 0 or < 5 
		 * or if nextCol > 6 
		 * return null;
		 * 
		 * otherwise 
		 * return gc.grid[nextRow][nextCol];
		 */
		}

		function checkNextCell(cell, matches, direction) {
		/**
		 * var nextCell = getNextCell(cell, direction)
		 * check if nextCell is defined 
		 * if nextCell.hasToken and nextCell.color
		 * matches cell.color 
		 * increment matches and then 
		 * return checkNextCell(nextCell, matches, direction)
		 * 
		 * otherwise return matches
		 */
		}

		function endTurn() {
		/**
		 * End Turn simply switch 
		 * gc.activePlayer from 
		 * 'red' to 'yellow' 
		 * and 'yellow' to 'red'
		 */
		}
};