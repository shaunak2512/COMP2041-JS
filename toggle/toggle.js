(function() {
   'use strict';
   // write your js here.
   console.log("here");
   let hide = document.getElementById('output');
   window.setInterval(() => {
   	hide.classList.toggle('hide')
   },2000);
   }());
