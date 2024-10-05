var nameButton = document.getElementById("nameButton");
var displayName = document.getElementById("displayName");
    nameButton.onclick = function() {
    var userName = prompt("Please enter your name:");
    if (userName) {
        displayName.innerText = "Welcome to my page, " + userName + "!";
    }
};

function enlargeImage() {
    var img = document.getElementById("image");
    if (img.classList.contains("enlarged")) {
        img.classList.remove("enlarged");
        img.style.width = "100px";
    } 
    else {
        img.classList.add("enlarged");
        img.style.width = "200px";
    }
}

var navItems = [
    { name: 'Home', link: 'index.html' },
    { name: 'Portfolio', link: '#', subItems: [
        { name: 'Work Experience', link: 'work-experience.html' },
        { name: 'Certifications & Awards', link: 'certifications.html' }
    ]},
    { name: 'About Us', link: 'about.html' },
    { name: 'Contact', link: 'contact.html' }
];

// Create the unordered list for the navigation menu
var ul = document.createElement('ul');

// Create each navigation item
navItems.forEach(function(item) {
    var li = document.createElement('li');
    
    // Create anchor element
    var a = document.createElement('a');
    a.href = item.link; // Set the link
    a.textContent = item.name; // Set the text
    
    // Append the anchor to the list item
    li.appendChild(a);
    
    // Handle dropdown menu for "Portfolio"
    if (item.subItems) {
        var submenu = document.createElement('ul'); // Create a new UL for the submenu
        submenu.style.display = 'none'; // Initially hide the submenu
        
        // Submenu items
        item.subItems.forEach(function(subItem) {
            var subLi = document.createElement('li');
            var subA = document.createElement('a');
            subA.href = subItem.link;
            subA.textContent = subItem.name;
            subLi.appendChild(subA);
            submenu.appendChild(subLi);
        });
        
        // Append the submenu to the "Portfolio" list item
        li.appendChild(submenu);
        
        // Show submenu on mouse over
        li.onmouseover = function() {
            submenu.style.display = 'block';
        };
        
        // Hide submenu on mouse out
        li.onmouseout = function() {
            submenu.style.display = 'none';
        };
    }
    
    // Append the list item to the unordered list
    ul.appendChild(li);
});

// Set the display property for the main navigation
ul.style.listStyleType = 'none'; // Remove default bullets
ul.style.padding = '0'; // Remove default padding
ul.style.margin = '0'; // Remove default margin

// Make the main navigation items display inline (horizontally)
ul.childNodes.forEach(function(li) {
    li.style.display = 'inline'; // Set each list item to display inline
    li.style.marginRight = '20px'; // Add some spacing between items
});

// Append the unordered list to the navigation bar
document.getElementById('navBar').appendChild(ul);