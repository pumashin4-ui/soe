document.addEventListener('DOMContentLoaded', function() {
    const avatarButton = document.querySelector('.avatar-button');
    const savedAvatar = localStorage.getItem('selectedAvatar') || 'a1';

    // ensure button contains an img
    avatarButton.innerHTML = `<img id="home-avatar" src="../static/images/${savedAvatar}.png" alt="Avatar" />`;

    // adjust image styling
    const avatarImg = document.getElementById('home-avatar');
    avatarImg.style.width = '100%';
    avatarImg.style.height = '100%';
    avatarImg.style.borderRadius = '50%';

    // navigation remains on button click
});
