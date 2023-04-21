const submitBtn = document.querySelector('.cta');
const getFirstName = document.querySelector('.fName');
const getLastName = document.querySelector('.lName');
const getPhone = document.querySelector('.phone');
const getEmail = document.querySelector('.email');



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbarId");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}