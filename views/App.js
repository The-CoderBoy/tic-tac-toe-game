const p = document.getElementById("p");
p.style.display = "none";
var click = true;
let b = [];
let gameOver = false;

const element = (e, i) => {
  if (!gameOver) {
    if (click === true) {
      e.innerHTML = "x";
      b[i] = 2;
      click = false;
    } else {
      e.innerHTML = "0";
      b[i] = 3;
      click = true;
    }
    e.disabled = true;
    checkWinner();
  }
};

const checkWinner = () => {
  if (
    b[0] * b[1] * b[2] === 8 ||
    b[3] * b[4] * b[5] === 8 ||
    b[6] * b[7] * b[8] === 8 ||
    b[0] * b[3] * b[6] === 8 ||
    b[1] * b[4] * b[7] === 8 ||
    b[2] * b[5] * b[8] === 8 ||
    b[0] * b[4] * b[8] === 8 ||
    b[2] * b[4] * b[6] === 8
  ) {
    p.style.display = "block";
    p.innerText = "Player 1 Win";
    gameOver = true;
  }
  if (
    b[0] * b[1] * b[2] === 27 ||
    b[3] * b[4] * b[5] === 27 ||
    b[6] * b[7] * b[8] === 27 ||
    b[0] * b[3] * b[6] === 27 ||
    b[1] * b[4] * b[7] === 27 ||
    b[2] * b[5] * b[8] === 27 ||
    b[0] * b[4] * b[8] === 27 ||
    b[2] * b[4] * b[6] === 27
  ) {
    p.style.display = "block";
    p.innerText = "Player 2 Win";
    gameOver = true;
  }
};

const reloadPage = () => {
  location.reload();
};
