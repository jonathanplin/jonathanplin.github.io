function loadUserData() {
    var user = document.getElementById("username");
    var savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        user.value = savedUsername; // Set input value to the saved username
    }
}

// Update paragraph with real-time user input
function inputHandler() {
    var myvalue = document.getElementById("username").value;
    document.getElementById("emptyParagraph").innerHTML = "Your Input: " + myvalue;
}

// Handle form submission
document.getElementById('userForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    // Store input values in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    alert("Your data has been saved to local storage.");
};

// Handle clear button functionality
document.getElementById('clearBtn').onclick = function() {
    document.getElementById('userForm').reset(); // Clear all form fields
    document.getElementById("emptyParagraph").innerHTML = "Dynamically change on webpage input without prompt"; // Reset the paragraph
    alert("All fields have been cleared.");
};