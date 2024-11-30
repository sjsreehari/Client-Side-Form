const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Validate phone number length
    if (phone.length !== 10) {
        alert("Phone number must be 10 digits!");
        return;
    }

    alert("Registration successful!");
});
