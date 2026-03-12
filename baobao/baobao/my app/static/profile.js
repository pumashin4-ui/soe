// Load username from localStorage when page loads
document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username-input');
    const savedUsername = localStorage.getItem('gameUsername') || 'Player';
    usernameInput.value = savedUsername;

    // Load saved avatar
    const savedAvatar = localStorage.getItem('selectedAvatar') || 'a1';
    const profileAvatar = document.getElementById('profile-avatar');
    profileAvatar.src = `../static/images/${savedAvatar}.png`;

    // Add click handlers to avatar grid items
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.src;
            const avatarName = imageSrc.split('/').pop().split('.')[0]; // Extract filename without extension

            // Update profile avatar
            profileAvatar.src = imageSrc;

            // Save to localStorage
            localStorage.setItem('selectedAvatar', avatarName);

            // Optional: Add visual feedback
            this.style.border = '3px solid #4b39ef';
            setTimeout(() => {
                this.style.border = 'none';
            }, 500);
        });
    });
});

// Toggle edit mode for username
function toggleEdit() {
    const usernameInput = document.getElementById('username-input');
    const isReadonly = usernameInput.hasAttribute('readonly');

    if (isReadonly) {
        usernameInput.removeAttribute('readonly');
        usernameInput.focus();
        usernameInput.select();
    } else {
        usernameInput.setAttribute('readonly', 'true');
    }
}

// Save username from profile page
function saveUsername() {
    const usernameInput = document.getElementById('username-input');
    const value = usernameInput.value.trim();
    if (value === '') {
        alert('Username cannot be empty');
        return;
    }
    usernameInput.setAttribute('readonly', 'true');
    localStorage.setItem('gameUsername', value);
    alert('Username saved');
}

// Save username when user presses Enter
document.getElementById('username-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        this.setAttribute('readonly', 'true');
        localStorage.setItem('gameUsername', this.value);
    }
});
