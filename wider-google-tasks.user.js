// ==UserScript==
// @name           Wider Google Tasks
// @locale         en
// @description:en Makes the Google Calendar tasks window wide enough to actually use!
// @namespace      http://tomsmyth.ca
// @match          https://calendar.google.com/*
// @match          https://www.google.com/calendar/*
// @version        1.01
// ==/UserScript==

setTimeout(function(){
  var TASKS_WIDTH = "250px";
  var main = document.getElementById('gridcontainer');
  var sidebar = document.getElementById('gadgetcell');
  if (main && sidebar) {
    sidebar.style.width = TASKS_WIDTH;
    sidebar.firstChild.firstChild.style.width = TASKS_WIDTH;
    main.style.width = (main.offsetWidth - 88) + "px";
  }
  document.getElementById('rhstogglecell').style.display = "none";
}, 2000);
