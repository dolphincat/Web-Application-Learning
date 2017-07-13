var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("h3 span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {

      gameOver = true;
      p1Display.classList.add("winner");
    }
    p1Display.textContent = p1Score;

  }

});

p2Button.addEventListener("click", function() {
      if (!gameOver) {
        p2Score++;
        console.log(p2Score);
        if (p2Score === winningScore) {
          console.log("GAME OVER!");
          gameOver = true;
          p2Display.classList.add("winner");
        }

        p2Display.textContent = p2Score;
      }
      });

resetButton.addEventListener("click",function(){
        p1Score = 0;
        p2Score = 0;
        p1Display.textContent = p1Score;
        p2Display.textContent = p2Score;
        p1Display.classList.remove("winner");
        p2Display.classList.remove("winner");
        gameOver = false;
      });

numInput.addEventListener("change",function(){
        winningScoreDisplay.textContent = numInput.value;
        winningScore = Number(this.value);
        reset();
      });