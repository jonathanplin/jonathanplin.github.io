document.getElementById("nameButton").onclick = function() {
    const userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("displayName").innerText = "Hello, " + userName + "!";
    }
};