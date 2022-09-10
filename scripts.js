const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timer = document.querySelector("#timer");
const score = document.querySelector("#score");
const startBtn = document.querySelector("#start-btn");

let result = 0;
let hitPosition;
let timerId = null;
let currentTime = 60;

function randomSquare() {
	// REMOVE MOLE FROM SQUARES
	squares.forEach((square) => {
		square.classList.remove("mole");
	});

	// ADD MOLE TO RANDOM SQUARE
	let randomSquare = squares[Math.floor(Math.random() * 9)];
	randomSquare.classList.add("mole");

	hitPosition = randomSquare.id;
}

// LISTEN FOR & HANDLE MOLE HIT
squares.forEach((square) => {
	square.addEventListener("mousedown", () => {
		if (square.id == hitPosition) {
			result++;
			score.textContent = result;
			hitPosition = null;
		}
	});
});

function moveMole() {
	timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
	currentTime--;
	timer.textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(countDownTimerId);
		clearInterval(timerId);
		alert("Game Over! Your Score: " + result);
	}
}

let countDownTimerId = setInterval(countDown, 1000);
