// @jsagacodes
const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${e.clientX}px`;
  star.style.top = `${e.clientY}px`;
  container.appendChild(star);

  // Remove stars after a short delay to keep the animation clean
  setTimeout(() => {
    star.remove();
  }, 1000);
});