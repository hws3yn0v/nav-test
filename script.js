const profile = document.querySelector('.profile');

profile.addEventListener('mouseenter', () => {
  const icon = profile.querySelector('i');
  icon.classList.add('rotate');
});

profile.addEventListener('mouseleave', () => {
  const icon = profile.querySelector('i');
  icon.classList.remove('rotate');
});
