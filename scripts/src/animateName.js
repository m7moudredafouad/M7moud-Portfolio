const allNameChars = document.querySelectorAll('.char')

allNameChars.forEach(char => {
  char.addEventListener('mouseenter', (event) => {
  const selectedSpan = event.target;

  if(selectedSpan.classList.contains('animateHomeName')) return;
  
  selectedSpan.classList.add('animateHomeName');
  setTimeout(() => {
    selectedSpan.classList.remove('animateHomeName');
  }, 900)
})
})