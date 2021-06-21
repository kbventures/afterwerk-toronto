//Turn off Hamburger menu when link clicked feature

let navigationToggle = document.getElementById('navi-toggle');
let linkCollection = document.getElementById('navigation');
linkCollection.addEventListener('click', function () {
  navigationToggle.checked = false;
});

// Popup Stories will close when black background clicked;
// &__close {
//   &:link,
//   &:visited {
//     color: $color-white;
//     position: absolute;
//     top: 2.5rem;
//     right: 2.5rem;
//     font-size: 2.5rem;
//     text-decoration: none;
//     display: inline-block;
//     transition: all 0.2s;
//     line-height: 1;

//     &:hover {
//       color: $color-primary-dark;
//     }
//   }
// }
