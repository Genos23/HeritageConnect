function openCurtain() {
    // Move the curtains
    document.querySelector('.curtain-left').style.transform = 'translateX(-100%)';
    document.querySelector('.curtain-right').style.transform = 'translateX(100%)';

    // Use a timeout to show the content after the curtain animation is complete
    setTimeout(() => {
        document.querySelector('.content').style.display = 'flex'; // Show the content
    }, 1500); // Matches the transition duration of 1.5s (1500ms)
    
    document.querySelector('.curtain-button').style.display = 'none';
}


function scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

// Popup functions
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
