function sendEmail(){
  
let fullName = document.getElementById('name').value;
let phoneNumber = document.getElementById('phone').value;
let clientEmail = document.getElementById('userEmail').value;

let body = 'Full Name :' + fullName + '<br> Contact :' + phoneNumber + '<br> email :' + clientEmail;

Email.send({
SecureToken : "c2f962d2-a64a-4525-83de-56b8cbf20c6e",
To : 'propgrowofficial@gmail.com',
From :'amitmaggu591@gmail.com',
Subject : "Paras SCO",
Body : body
}).then(
message => alert(message)
);
}


// contact page mail 
function contactEmail(){
  
  let fullName = document.getElementById('cName').value;
  let phoneNumber = document.getElementById('cPhone').value;
  let clientEmail = document.getElementById('cEmail').value;
  
  let body = 'Full Name :' + fullName + '<br> Contact :' + phoneNumber + '<br> email :' + clientEmail;
  
  Email.send({
  SecureToken : "c2f962d2-a64a-4525-83de-56b8cbf20c6e",
  To : 'propgrowofficial@gmail.com',
  From :'amitmaggu591@gmail.com',
  Subject : "Paras SCO",
  Body : body
  }).then(
  message => alert(message)
  );
  }
  


// phone number form
function sendNum(){
  
    // let fullName = document.getElementById('name').value;
    let phoneNumber = document.getElementById('contactNum').value;
    // let clientEmail = document.getElementById('userEmail').value;
    
    let body = "Contact Num:"+ phoneNumber ;  
    Email.send({
    SecureToken : "c2f962d2-a64a-4525-83de-56b8cbf20c6e",
    To : 'propgrowofficial@gmail.com',
    From :'amitmaggu591@gmail.com',
    Subject : "Paras SCO",
    Body : body
    }).then(
    message => alert(message)
    );
    }


    // Popup modal
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }


// nav-hamburger{

const navSlide = ()=>{
  const hBurger = document.querySelector('.burger');
   const navBar= document.querySelector('.nav-links');
   const navLinks = document.querySelectorAll('.nav-links li');
  //  togggle nav
   
   hBurger.addEventListener('click', ()=>{
    navBar.classList.toggle('nav-active');
   });
  //  Animation links
   navLinks.forEach((link, index) =>{ 
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +4}s`;

   });
}

navSlide(); 