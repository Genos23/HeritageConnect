document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButtons = document.querySelectorAll(".learn-more");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDetails = document.getElementById("modal-details");
    const projectLink = document.getElementById("project-link");
    const closeModal = document.querySelector(".close");

    // Project details
    const projectDetails = {
        tajMahal: {
            title: "Taj Mahal Preservation",
            details: "The Taj Mahal, one of the Seven Wonders of the World, is under constant environmental threat. Conservation efforts are focused on restoring its marble façade, preventing yellowing caused by air pollution, and maintaining the gardens. Recent efforts include chemical treatment and mud-pack therapy.",
            link: "https://asi.nic.in/taj-mahal/"
        },
        qutubMinar: {
            title: "Qutub Minar Conservation",
            details: "The Qutub Minar is an iconic UNESCO World Heritage Site. Conservation projects involve structural reinforcement to prevent tilting, detailed stone restoration, and measures to reduce environmental wear and tear. Conservationists are also improving visitor facilities while maintaining the site’s historical integrity.",
            link: "https://asi.nic.in/qutub-minar/"
        },
        redFort: {
            title: "Red Fort Restoration",
            details: "The Red Fort is a symbol of India's rich history. Restoration projects include repairing damaged sandstone walls, preserving intricate carvings, and improving drainage systems to prevent water damage. Conservation also focuses on restoring the gardens and enhancing public accessibility.",
            link: "https://asi.nic.in/red-fort-complex/"
        }
    };

    // Show the modal with project details and link
    learnMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const projectKey = this.getAttribute('data-project');
            modalTitle.innerText = projectDetails[projectKey].title;
            modalDetails.innerText = projectDetails[projectKey].details;
            projectLink.href = projectDetails[projectKey].link;
            modal.style.display = "flex"; // Show the modal
        });
    });

    // Close modal on clicking the close button or outside the modal content
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
