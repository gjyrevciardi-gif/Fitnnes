document.addEventListener("DOMContentLoaded", () => {

  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      if (!name.value || !email.value || !message.value) {
        error.textContent = "All fields are required";
      } else {
        error.textContent = "Message sent successfully";
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      if (!loginEmail.value || !loginPassword.value) {
        loginError.textContent = "Email and password required";
      } else {
        loginError.textContent = "Login successful";
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      if (regPassword.value !== regConfirm.value) {
        registerError.textContent = "Passwords do not match";
      } else {
        registerError.textContent = "Registered successfully";
      }
    });
  }

});
