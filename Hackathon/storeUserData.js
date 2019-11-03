// Initialize Firebase (ADD YOUR OWN DATA)
var database = firebase.database();
var messagesRef= database.ref('users');
// Listen for form submit
document.getElementById('contact').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var adress = getInputVal('address');

  // Save message
  saveMessage(name, email, phone, adress);

  // Show alert
  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

  // Clear form
  document.getElementById('contact').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, adress){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    adress:adress
  });
}
