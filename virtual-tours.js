// Function to handle the virtual tour selection and display
document.getElementById("explore-btn").addEventListener("click", function() {
    var selectedTour = document.getElementById("tour-selection").value;
    var tourDisplay = document.getElementById("virtual-tour-display");

    // Check if a tour was selected
    if (selectedTour === "none") {
        alert("Please select a heritage site to explore!");
        return;
    }

    // Set the iframe or content for the selected tour
    switch (selectedTour) {
        case "tour1":
            tourDisplay.innerHTML = `
                <div class="virtual-tour-content">
                    <iframe src="https://www.youtube.com/embed/W4aQFdMK8nc" frameborder="0" width="100%" height="500"></iframe>
                    <p>Explore the beauty of Taj Mahal, Agra, India through this virtual tour.</p>
                </div>
            `;
            break;
        case "tour2":
            tourDisplay.innerHTML = `
                <div class="virtual-tour-content">
                    <iframe src="https://www.youtube.com/embed/XNRJ9gk2PZs" frameborder="0" width="100%" height="500"></iframe>
                    <p>Explore the Qutub Minar, Delhi, India through this virtual tour.</p>
                </div>
            `;
            break;
        case "tour3":
            tourDisplay.innerHTML = `
                <div class="virtual-tour-content">
                    <iframe src="https://www.youtube.com/embed/AJ5QngqKqgk" frameborder="0" width="100%" height="500"></iframe>
                    <p>Discover the Red Fort, Delhi in this virtual tour.</p>
                </div>
            `;
            break;
        case "tour4":
            tourDisplay.innerHTML = `
                <div class="virtual-tour-content">
                    <iframe src="https://www.youtube.com/embed/PnQpyFw4Gz0" frameborder="0" width="100%" height="500"></iframe>
                    <p>Take a tour of Mysore Palace, Karnataka through this virtual experience.</p>
                </div>
            `;
            break;
        case "tour5":
            tourDisplay.innerHTML = `
                <div class="virtual-tour-content">
                    <iframe src="https://www.youtube.com/embed/lnlxmxg_5lI" frameborder="0" width="100%" height="500"></iframe>
                    <p>Explore the Gateway of India, Mumbai, in this immersive virtual tour.</p>
                </div>
            `;
            break;
        case "tour6":
            tourDisplay.innerHTML = `
                <div class="virtual-tour-content">
                    <iframe src="https://www.youtube.com/embed/ZtfrflBeQDI" frameborder="0" width="100%" height="500"></iframe>
                    <p>Experience the Khajuraho Temples, Madhya Pradesh, in this virtual tour.</p>
                </div>
            `;
            break;
        default:
            tourDisplay.innerHTML = `
                <p>Select a valid heritage site to view the virtual tour.</p>
            `;
    }
});
