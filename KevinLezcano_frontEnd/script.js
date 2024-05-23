document.getElementById('email').addEventListener('input', function() {
    var emailInput = document.getElementById('email');
    var loginBtn = document.getElementById('login-btn');
    
    if (emailInput.value.trim() !== '') {
      loginBtn.removeAttribute('disabled');
    } else {
      loginBtn.setAttribute('disabled', 'disabled');
    }
  });
  