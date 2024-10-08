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
    { name: 'Portfolio', link: 'portfolio.html', subItems: [
        { name: 'Work Experience', link: 'work-experience.html' },
        { name: 'Certifications & Awards', link: 'certifications.html' }
    ]},
    { name: 'About Us', link: 'about.html' },
    { name: 'Contact', link: 'contact.html' }
];

var ul = document.createElement('ul');

navItems.forEach(function(item) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.name;
    li.appendChild(a);
    
    if (item.subItems) {
        var submenu = document.createElement('ul');
        item.subItems.forEach(function(subItem) {
            var subLi = document.createElement('li');
            var subA = document.createElement('a');
            subA.href = subItem.link;
            subA.textContent = subItem.name;
            subLi.appendChild(subA);
            submenu.appendChild(subLi);
        });
        li.appendChild(submenu);
    }
    
    ul.appendChild(li);
});

document.getElementById('navBar').appendChild(ul);