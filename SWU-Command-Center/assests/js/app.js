document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder authentication logic
    if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});
