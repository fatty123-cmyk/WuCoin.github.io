document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve existing users from local storage or initialize an empty array
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
        alert('Username is already taken. Please choose another.');
        return;
    }

    // Add the new user to the array
    users.push({ username: username, password: password });

    // Save the updated user data back to local storage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful. You can now login.');
    this.reset();
});
