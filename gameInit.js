function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startcountdown(numberOfPlayers, picture) {
	for (let i = 20; i > 0; i--) {
    	await sleep(1000);
    	document.getElementById("countdown").innerHTML = "<h1>"+ i +"</h1>";
	}
	take_snapshot(numberOfPlayers, picture);
	document.getElementById("printHidden").classList.add('hidden');
}

function initPlayer(numberOfPlayers) {
	if(numberOfPlayers == 2) {
		var pictureNumber2 = (Math.floor(Math.random() * 17)) + 1;
		document.getElementById("gameScene").innerHTML = '<img src="./2player/'+pictureNumber2+'.jpg" class="rounded mx-auto d-block picture">';
		startcountdown("2player", pictureNumber2);
	}
	else if (numberOfPlayers == 3) {
		var pictureNumber3 = (Math.floor(Math.random() * 8)) + 1;
		document.getElementById("gameScene").innerHTML = '<img src="./3player/'+pictureNumber3+'.jpg" class="rounded mx-auto d-block picture">';
		startcountdown("3player", pictureNumber3);
	}
	else if (numberOfPlayers == 4) {
		var pictureNumber4 = (Math.floor(Math.random() * 10)) + 1;
		document.getElementById("gameScene").innerHTML = '<img src="./4player/'+pictureNumber4+'.jpg" class="rounded mx-auto d-block picture">';
		startcountdown("4player", pictureNumber4);
	}
		else if (numberOfPlayers == 5) {
		startcountdown("no", pictureNumber4);
	}
}

function take_snapshot(numberOfPlayers, picture) {
	// take snapshot and get image data
	Webcam.snap( function(data_uri) {
		// display results in page
		if (numberOfPlayers == "no") {
			document.getElementById('results').innerHTML = 
			'<img src="'+data_uri+'"/>' + '<br> <a href="'+data_uri+'" class="btn btn-primary playerBox d-flex justify-content-center" download>Bild Speichern</a> <a href="index.html" class="btn btn-primary playerBox d-flex justify-content-center">Neues Foto</a>';
		} else {
			document.getElementById('results').innerHTML = 
			'<img src="'+data_uri+'"/>' + '<img src="./'+numberOfPlayers+'/'+picture+'.jpg" class="rounded mx-auto d-block picture">' + '<br> <a href="'+data_uri+'" class="btn btn-primary playerBox d-flex justify-content-center" download>Bild Speichern</a> <a href="index.html" class="btn btn-primary playerBox d-flex justify-content-center">Neues Foto</a>';
		}
	} );
}

function printImage(img) {
	popup = window.open();
	popup.document.write("<img src='"+img+"'>");
	popup.focus(); //required for IE
	popup.print();
}