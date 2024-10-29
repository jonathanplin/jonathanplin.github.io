// Load user data from local storage when the page loads
window.onload = function() {
    // Get the username from local storage
    var storedUsername = localStorage.getItem("username");

    // Check if there's a stored username and fill the input field
    if (storedUsername) {
        document.getElementById("name").value = storedUsername; // Populate the name field
        console.log("Loaded username from local storage: " + storedUsername);
    } else {
        console.log("No username found in local storage.");
    }

    // Log the input value and type when the username input is accessed
    var user = document.getElementById("name");
    console.log("Input value:", user.value); // User input value
    console.log("Input type:", user.type);   // Type of the form element
};

// Function to dynamically update text based on user input
function inputHandler() {
    var myvalue = document.getElementById("name").value; // Changed to the correct ID
    document.getElementById("emptyParagraph").innerHTML = "Your Input: " + myvalue; // Update paragraph
}

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        industry: document.querySelector('input[name="industry"]:checked')?.value,
        jobTitle: document.getElementById('jobTitle').value,
        contactMethod: Array.from(document.querySelectorAll('input[name="contactMethod"]:checked')).map(el => el.value),
        department: document.getElementById('department').value,
        comments: document.getElementById('comments').value
    };

    // Save the username in local storage
    localStorage.setItem("username", formData.name);
    localStorage.setItem('contactFormData', JSON.stringify(formData)); // Save all form data
    alert('Your data has been saved!'); // Confirmation message
});

// Function to handle form reset
document.getElementById('clearButton').addEventListener('click', function() {
    // Clear local storage
    localStorage.removeItem('contactFormData');
    localStorage.removeItem('username'); // Remove stored username
    alert('All fields have been cleared!'); // Confirmation message
});