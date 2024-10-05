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