const html = document.documentElement;
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function(event){
  event.preventDefault();

  const usernameOrEmail = document.getElementById('userInput').value;
  const password = document.getElementById('passInput').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];

  // מציאת המשתמש
  let user = users.find(u => 
    u.username === usernameOrEmail || u.email === usernameOrEmail
  );

  // בדיקה
  if (user && user.password === password) {
    loginMessage.textContent = 'Login successful!';
    loginMessage.classList.remove('text-red-500');
    loginMessage.classList.add('text-green-500');

    // 🔥 כאן נשמר המשתמש המחובר
    localStorage.setItem('currentUser', JSON.stringify(user));

  } else {
    loginMessage.textContent = 'Invalid username/email or password.';
    loginMessage.classList.remove('text-green-500');
    loginMessage.classList.add('text-red-500');
  }
});
