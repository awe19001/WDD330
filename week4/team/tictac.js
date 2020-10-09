 /* Tic Tac Toe
		1. Build a 3X3 board in HTML and CSS.
		You could do this with either a table element, or a collection of divs. Both have their advantages and disadvantages.

		2.  Attach a touchend listener to the board.
		When a cell is touched it should add either an 'X or an 'O', depending on whether it is player 1 or player 2's turn.

		3. Add a reset button.
		When touched the reset button should remove all of the marks from the board.
		
		Stretch Goals:
		1. remove the outer borders from the board
		Hint: look into :nth-child(n), :last-child, etc for help to target specific cells to turn borders on or off.
		2. Right now the players have to decide who won, or whether it was a tie. Add some game logic to figure out when the game should result in a tie.
		
        3. Add the logic to figure out when someone wins*/
        
        let counter = 0;

		function game(event) {
		  const target = event.target;
		  counter++;
		if(target.innerHTML == ""){
		  switch (counter % 2) {
			case 0:
			  target.innerHTML = "O";
              target.style.color = "red";            
			  break;
			case 1:
			  target.innerHTML = "X";
              target.style.color = "yellow";       
			  break;
		  }
		}
		  for (i = 0; i < 3; i++) {
						if ((document.getElementById(i).innerHTML == "X") && (document.getElementById(i + 3).innerHTML == 'X') && (document.getElementById(i + 6).innerHTML == 'X')) {
						var winner = "Congratulations! X Wins";
						document.getElementById("winner").innerText = winner;
					}
				}

		for (i = 0; i < 3; i++) {
						if ((document.getElementById(i).innerHTML == "O") && (document.getElementById(i + 3).innerHTML == 'O') && (document.getElementById(i + 6).innerHTML == 'O')) {
						var winner = "Congratulations! O Wins";
						document.getElementById("winner").innerText = winner;
					}
				}

		for (i = 0; i < 9; i += 3) {
						if ((document.getElementById(i).innerHTML == "X") && (document.getElementById(i + 1).innerHTML == 'X') && (document.getElementById(i + 2).innerHTML == 'X')) {
						var winner = "Congratulations! X Wins";
						document.getElementById("winner").innerText = winner;
					}
				}

		for (i = 0; i < 9; i += 3) {
						if ((document.getElementById(i).innerHTML == "O") && (document.getElementById(i + 1).innerHTML == 'O') && (document.getElementById(i + 2).innerHTML == 'O')) {
						var winner = "Congratulations! O Wins";
						document.getElementById("winner").innerText = winner;
					}
				}
				var total = 0;
      for (i = 0; i < 9; i++) {
						if ((document.getElementById(i).innerHTML == "X") ||(document.getElementById(i).innerHTML == "O")) {
              total++
              if(total == 9){
                var winner = "Its a tie!";
						document.getElementById("winner").innerText = winner;
              }						
					}
				}

		if ((document.getElementById(0).innerHTML == "X") && (document.getElementById(4).innerHTML == 'X') && (document.getElementById(8).innerHTML == 'X')) {
			var winner = "Congratulations! X Wins";
						document.getElementById("winner").innerText = winner;
		}

		if ((document.getElementById(2).innerHTML == "X") && (document.getElementById(4).innerHTML == 'X') && (document.getElementById(6).innerHTML == 'X')) {
			var winner = " Congratulations! X Wins";
						document.getElementById("winner").innerText = winner;
		}

		if ((document.getElementById(0).innerHTML == "O") && (document.getElementById(4).innerHTML == 'O') && (document.getElementById(8).innerHTML == 'O')) {
			var winner = "Congratulations! O Wins";
						document.getElementById("winner").innerText = winner;
		}

		if ((document.getElementById(2).innerHTML == "O") && (document.getElementById(4).innerHTML == 'O') && (document.getElementById(6).innerHTML == 'O')) {
			var winner = "Congratulations! O Wins";
						document.getElementById("winner").innerText = winner;
		}

		}

		// Reset
		function reset() {
		  counter = 0;
		  for (let i = 0; i < 9; i++) {
			var cleared = "";
			var initText = "No Winner Yet";
			var square = document.getElementById(i);
			var winner = document.getElementById('winner');
			square.innerText = cleared;
			winner.innerText = initText;
		  }
		}

