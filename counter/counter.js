(function() {
   'use strict';
   // write your code here
	let output = document.getElementById('output');
	function tick(){
		output.innerText = Date.now();
	}
	window.setInterval(tick,1000);

}());
