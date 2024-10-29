// Function to handle form submission
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

    // Convert to JSON string + save to local storage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Your data has been saved!'); // Confirmation message
});

// Function to handle form reset
document.getElementById('clearButton').addEventListener('click', function() {
    // Clear local storage
    localStorage.removeItem('contactFormData');
    alert('All fields have been cleared!'); // Confirmation message
});