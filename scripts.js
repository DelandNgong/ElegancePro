let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.transform = 'translateX(0)';
}

setInterval(showNextImage, 3000);

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Message sent successfully!');
        // Here, you would typically send the form data to the server
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
