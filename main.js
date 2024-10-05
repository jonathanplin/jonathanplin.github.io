var nameButton = document.getElementById("nameButton");
var displayName = document.getElementById("displayName");
    nameButton.onclick = function() {
    var userName = prompt("Please enter your name:");
    if (userName) {
        displayName.innerText = "Hello, " + userName + "!";
    }
};

function enlargeImage() {
    var img = document.getElementById("image");
    if (img.classList.contains("enlarged")) {
        img.classList.remove("enlarged");
        img.style.width = "20px";
    } else {
        img.classList.add("enlarged");
        img.style.width = "60px"; //
    }
}