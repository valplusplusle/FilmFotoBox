function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startcountdown() {
	for (let i = 5; i > 0; i--) {
    	await sleep(2000);
    	document.getElementById("countdown").innerHTML = "<h1>"+ i +"</h1>";
	}
	take_snapshot();
	document.getElementById("printHidden").classList.add('hidden');
}

function initPlayer(numberOfPlayers) {
	if(numberOfPlayers == 2) {
		document.getElementById("gameScene").innerHTML = '<img src="./2player/'+1+'.jpg" class="rounded mx-auto d-block picture">';
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

function take_snapshot() {
	// take snapshot and get image data
	Webcam.snap( function(data_uri) {
		// display results in page
		document.getElementById('results').innerHTML = 
			'<img src="'+data_uri+'"/>';
	} );
}