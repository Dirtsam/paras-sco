function sendEmail(){
  
let fullName = document.getElementById('name').value;
let phoneNumber = document.getElementById('phone').value;
let clientEmail = document.getElementById('userEmail').value;

let body = 'Full Name :' + fullName + '<br> Contact :' + phoneNumber + '<br> email :' + clientEmail;

Email.send({
SecureToken : "c05ae092-79b6-4d6c-93de-924fbbe673b8",
To : 'sanjay13wan@gmail.com',
From :'sanjay13realty@gmail.com',
Subject : "This is the subject",
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
    SecureToken : "c05ae092-79b6-4d6c-93de-924fbbe673b8",
    To : 'sanjay13wan@gmail.com',
    From :'sanjay13realty@gmail.com',
    Subject : "This is the subject",
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