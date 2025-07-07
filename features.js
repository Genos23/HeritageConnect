function showPopup(type) {
    const popupContent = document.getElementById('popup-content');
    if (type === 'resources') {
        popupContent.innerHTML = '<h2>Resources</h2><p>Here are some resources for heritage preservation.</p>';
    } else if (type === 'contact') {
        popupContent.innerHTML = '<h2>Contact Us</h2><p>Email: info@heritageconnect.com</p>';
    }
    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}
