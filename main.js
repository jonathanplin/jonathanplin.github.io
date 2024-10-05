var nameButton = document.getElementById("nameButton");
var displayName = document.getElementById("displayName");
document.getElementById("nameButton").onclick = function() {
    var userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("displayName").innerText = "Hello, " + userName + "!";
    }
};