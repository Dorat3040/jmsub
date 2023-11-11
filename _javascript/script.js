// This is a function named hideShowDiv that takes one argument, val.
function hideShowDiv(val) {
  // If the value of val is 1
  if (val == 1) {
    // It gets the HTML element with the id "hideShow" and changes its display style to "block", making it visible.
    document.getElementById("hideShow").style.display = "block";
  }
  // If the value of val is 2
  if (val == 2) {
    // It gets the HTML element with the id "hideShow" and changes its display style to "none", hiding it.
    document.getElementById("hideShow").style.display = "none";
  }
}

// This is a function named validateForm that doesn't take any arguments.
function validateForm() {
  // These lines get the values from the HTML elements with the ids "fName", "lName", "phone", and "email".
  var name = document.getElementById("fName").value;
  var last = document.getElementById("lName").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  // This line defines a regular expression for validating email addresses.
  var regx = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  // This line defines a regular expression for validating phone numbers.
  var regx2 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  // These lines check if the name or last name fields are empty or null. If they are, it displays a message and sets focus to the empty field.
  if (name == "" || name == null) {
    moreMsg("We need your First name please.");
    document.getElementById(name).focus;
  } else if (last == "" || last == null) {
    moreMsg("We need your Last name please.");
    document.getElementById(last).focus;
  }
  // These lines check if the phone number and email address are valid using the regular expressions. If they're not, it displays a message.
  else if (!regx2.test(phone)) {
    moreMsg("Please provide a valid Phone Number.");
  } else if (!regx.test(email)) {
    moreMsg("Please provide a valid Email.");
    document.getElementById("email").focus;
    return false;
  }
  // If all the fields are valid, it displays a success message and calls the sendEmail function
  else {
    moreMsg(
      "Thank You for placing your order with us. You will be getting an email shortly with your order confirmation."
    );
    sendEmail();
  }
}
function moreMsg(s) {
  var moreBox = document.getElementById("more");
  //reset to blank
  moreBox.innerHTML = s;
}
function linkHome() {
  window.location = "index.html";
}
// This is a function named sendEmail that doesn't take any arguments.
function sendEmail() {
  // This line creates an object named params. The properties of this object are set to the values of various HTML elements.
  var params = {
    to: document.getElementById("email").value, // The recipient of the email
    message: document.getElementById("fName").value, // The first name of the sender
    message2: document.getElementById("lName").value, // The last name of the sender
    message3: document.getElementById("phone").value, // The phone number of the sender
    message4: document.getElementById("email").value, // The email address of the sender
    message5: checkCheckboxes(), // The return value of the checkCheckboxes function
  };

  // This line sends an email using the emailjs service. The email service ("service_1wtf9qz") and template ("template_mjdoayo") are specified, and the params object is passed as the parameters for the email.
  emailjs
    .send("service_1wtf9qz", "template_mjdoayo", params)
    // The .then function is used to handle the Promise returned by emailjs.send. If the email is sent successfully, it displays an alert with the success message.
    .then(function (res) {
      alert("You will be getting an email shortly.");
    })
    // The .catch function is used to handle any errors that occur when sending the email. If an error occurs, it displays an alert with the error message.
    .catch(function (error) {
      alert(
        "Error: There was an error with our email service. Sorry for the inconvenience. Please contact use at JMSublimationandmore@gmail.com stating there was a problem and let us know what you would like from our shop. ",
        error
      );
    });
  emailjs
    .send("service_1wtf9qz", "template_2sqf4p1", params)
    // The .then function is used to handle the Promise returned by emailjs.send. If the email is sent successfully, it displays an alert with the success message.
    .then(function (res) {
      console.log("You will be getting an email shortly.");
    });
}

function checkCheckboxes() {
  // Assuming the checkboxes have ids 'checkbox1', 'checkbox2', 'checkbox3', 'checkbox4'
  var ids = ["Shirt", "Hat", "Tumbler", "Mug", "Other"];
  var selected = [];

  for (var i = 0; i < ids.length; i++) {
    var checkbox = document.getElementById(ids[i]);
    if (checkbox.checked) {
      selected.push(ids[i]);
    }
  }
  if (selected.length > 0) {
    return "You have selected the following items: " + selected.join(", ");
  } else {
    return "You have selected no items.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var overlayElement = document.getElementById("videoOverlay");
  var videoElement = document.getElementById("myVideo");

  if (overlayElement && videoElement) {
    // When the overlay is clicked
    overlayElement.addEventListener("click", function () {
      this.style.display = "none";
      videoElement.play();
    });

    // When the video ends
    videoElement.addEventListener("ended", function () {
      overlayElement.style.display = "block";
    });
  }
});
window.onload = function () {
  // Check if you're on tumbler.html
  if (window.location.pathname.endsWith("tumbler.html")) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    if (window.innerWidth <= 600) {
      if (div1 !== null) {
        div1.style.display = "block";
      }
    } else {
      if (div2 !== null) {
        div2.style.display = "block";
      }
    }
  }
};
