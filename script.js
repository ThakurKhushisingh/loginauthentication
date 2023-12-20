const validUsername = 'khushi';
const validPassword = 'khuljasimsim';

function authenticate() {
  // Get input values
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;
 if (usernameInput === validUsername && passwordInput === validPassword) {
    alert('Login successful!');
    window.location.href = 'index2.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}