document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: username, password: password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful. You can now login.');
    this.reset();
});
