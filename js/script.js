//Turn off Hamburger menu when link clicked feature

let navigationToggle = document.getElementById('navi-toggle');
let linkCollection = document.getElementById('navigation');
linkCollection.addEventListener('click', function () {
  navigationToggle.checked = false;
});
