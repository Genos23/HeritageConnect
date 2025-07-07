document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    const modal = document.getElementById('event-details-modal');
    const closeModalButton = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    const eventDetails = {
        event1: {
            title: 'Indian Cultural Heritage Workshop',
            description: 'This workshop delves into the rich cultural heritage of India, covering its history, traditions, and diverse practices.',
        },
        event2: {
            title: 'Traditional Arts and Crafts Workshop',
            description: 'Learn the traditional arts and crafts techniques passed down through generations in this hands-on workshop.',
        },
        event3: {
            title: 'Cultural Dance and Music Festival',
            description: 'Experience the vibrant dance and music traditions of India at this cultural festival.',
        }
    };

    // Open the modal and show event details when "Learn More" is clicked
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event');
            const details = eventDetails[eventId];
            modalTitle.innerText = details.title;
            modalDescription.innerText = details.description;
            modal.classList.remove('hidden'); // Show the modal
        });
    });

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener('click', function() {
        modal.classList.add('hidden'); // Hide the modal
    });

    // Close the modal when clicking outside the modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden'); // Hide the modal
        }
    });
});
