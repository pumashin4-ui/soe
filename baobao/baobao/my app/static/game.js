// Get elements
const usernameInput = document.getElementById('usernameInput');
const displayUsername = document.getElementById('display-username');

// Load saved username from localStorage if exists
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        usernameInput.value = savedUsername;        // pre-fill input
        displayUsername.textContent = savedUsername.toUpperCase(); // show in overlay
    }
}

// Function when user clicks Enter or presses Enter key
function goHome() {
    let username = usernameInput.value.trim();
    if (username === "") {
        username = "PLAYER"; // default
    }
    // Save to localStorage
    localStorage.setItem('username', username);
    // Update display
    displayUsername.textContent = username.toUpperCase();
    // Redirect or continue your game logic
    // window.location.href = 'index.html'; // uncomment if you want to go home
}