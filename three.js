// Initialize EmailJS
(function() {
    emailjs.init("9OxtzdqIWVbbmsw8q"); // Replace with your EmailJS public key
})();

document.getElementById('eWalletForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_qnrc9wi'; // Replace with your EmailJS service ID
    const templateID = 'template_e07ope6'; // Replace with your EmailJS template ID

    // Send form data
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Your order has been submitted successfully!');
        }, (err) => {
            alert('Failed to send your order. Please try again.');
            console.error('Error:', err);
        });
});
