(function() {
  'use strict';
  // TODO: Write some js 
  let allSections = document.getElementsByClassName('info-item');
  for(let section of allSections){
  	let button = section.getElementsByClassName('expand-collapse-btn')[0];
  	button.addEventListener('click',() => {
  		section.getElementsByClassName('extra-info')[0].style.display = 'none';	
  	});
  }
}());
