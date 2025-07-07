document.addEventListener("DOMContentLoaded", function() {
    const contributionForm = document.getElementById('contributionForm');
    const gallery = document.getElementById('gallery');

    // Handle form submission
    contributionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const story = document.getElementById('story').value;
        const photo = document.getElementById('photo').files[0];
        
        // Create a new gallery item
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        
        // Add photo if uploaded
        if (photo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                galleryItem.appendChild(img);
                addTextToGalleryItem();
            };
            reader.readAsDataURL(photo);
        } else {
            addTextToGalleryItem();
        }

        // Add text (name, story) to gallery item
        function addTextToGalleryItem() {
            const title = document.createElement('h3');
            title.innerText = name;

            const storyText = document.createElement('p');
            storyText.innerText = story;

            galleryItem.appendChild(title);
            galleryItem.appendChild(storyText);
            gallery.appendChild(galleryItem);
        }

        // Reset form
        contributionForm.reset();
    });
});
