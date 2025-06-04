function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation Logic
  if (!name || !email || !message) {
    alert("Please fill up all the fields.");
  } else {
    if (!email.endsWith("@gmail.com")) {
      alert("Please enter a valid email address.");
      return false;
    }
    alert("Submitted successfully");
  }
}
