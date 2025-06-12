document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const errorMsg = document.getElementById('errorMsg');

  if (!name.value || !email.value || !message.value) {
    errorMsg.textContent = "All fields are required!";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  errorMsg.textContent = "";
  alert("Form submitted successfully!");
  this.reset();
});
