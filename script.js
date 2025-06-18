document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const feedback = document.getElementById('formMessage');

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = `Thanks, ${name}! Your message has been sent.`;
  feedback.style.color = "green";

  this.reset();
});




