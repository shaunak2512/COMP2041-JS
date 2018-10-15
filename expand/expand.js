(function() {
  'use strict';
  // TODO: Write some js 
  let allSections = document.getElementsByClassName('info-item');
  for(let section of allSections){
  	let button = section.getElementsByClassName('expand-collapse-btn')[0];
  	//console.log(section.classList);
  	function expandCollapse(){
  		//collapse
  		if(section.getElementsByTagName('i')[0].innerText === "expand_less"){
  			section.getElementsByTagName('i')[0].innerText = 'expand_more';
  			section.getElementsByClassName('extra-info')[0].style.display = 'none';	
  		}
  		//expand
  		else{
  			section.getElementsByTagName('i')[0].innerText = 'expand_less';
  			section.getElementsByClassName('extra-info')[0].style.display = 'initial';
  		}

  	}
  	button.addEventListener('click',expandCollapse);
  }

}());
