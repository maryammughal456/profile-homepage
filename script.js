const toggleBtn = document.createElement('button');
toggleBtn.textContent = "Toggle Dark Mode";
document.body.prepend(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
