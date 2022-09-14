/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('offersDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById('offersDropdown').classList.toggle('show');
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function (e) {
//   if (!e.target.matches('.dropbtn')) {
//     var offersDropdown = document.getElementById('offersDropdown');
//     if (offersDropdown.classList.contains('show')) {
//       offersDropdown.classList.remove('show');
//     }
//   }
// };
