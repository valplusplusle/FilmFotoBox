function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startcountdown() {
	for (let i = 0; i < 5; i++) {
    	await sleep(2000);
    	console.log(i);
	}
	take_snapshot();
}

function initPlayer(numberOfPlayers) {
	if(numberOfPlayers == 2) {
		document.getElementById("gameScene").innerHTML = "2";
	}
	else if (numberOfPlayers == 3) {
		document.getElementById("gameScene").innerHTML = "3";
	}
	else if (numberOfPlayers == 4) {
		document.getElementById("gameScene").innerHTML = "4";
	}
	else if (numberOfPlayers == 5) {
		document.getElementById("gameScene").innerHTML = "5";
	}
	startcountdown();
}