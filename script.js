let curColor = '';
let clicks = [];
let sequence = ['yellow', 'red', 'blue', 'green'];

function handleClick(event) {
	const selection = event.target.classList[1];

	if (selection !== sequence[clicks.length]) {
		clicks = [];
	} else {
		clicks.push(selection);

		if (clicks.length === 4) {
			handleWin();
		}
	}
}

function handleWin() {
	window.location.href = 'success.html'
}

const circles = document.getElementsByClassName('circle')

console.log('Adding listeners to circles');
for (let i = 0; i < circles.length; i++) {
	circles[i].addEventListener("click", handleClick);
}