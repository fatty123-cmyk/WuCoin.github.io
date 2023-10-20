document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var user = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        alert('Login successful!');
        window.location.href = 'profile.html'; // Redirect to the user's profile page.
    } else {
        alert('Login failed. Please check your credentials.');
    }
});
