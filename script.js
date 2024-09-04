// JavaScript for interactivity and form handling

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! We have received your message: "${message}". We will reach out to you at ${email} shortly.`);
        
        form.reset(); // Reset form fields
    });
});
