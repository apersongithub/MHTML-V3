const interval = setInterval(function() {
	// method to be executed;
}, 50);

clearInterval(interval); // thanks @Luca D'Amico

window.setInterval(function() {
	var links = Array(
		'Stop calling me a skid',
		'DONDA > CLB changed my mind lol',
		"REPORT BUGS",
		'Privacy',
		'There is a 25% chance of getting this message.'
	);
	var randomlink = links[Math.floor(Math.random() * links.length)];
	document.getElementById('wait').innerHTML = randomlink;
}, 2000); // 1000 milliseconds (1 second)

