// Dropdown Menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Form Validation
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if (!name || !email || !message) {
    status.style.color = 'red';
    status.textContent = 'Please fill out all fields.';
    return false;
  }

  if (!email.includes('@') || !email.includes('.')) {
    status.style.color = 'red';
    status.textContent = 'Please enter a valid email.';
    return false;
  }

  status.style.color = 'green';
  status.textContent = 'Message sent successfully!';
  return false;  // just for demo, stops actual form submission
}
