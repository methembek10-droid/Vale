
let yesBtn = document.querySelector('.yes-btn');
let scale = 1;

document.querySelector('.yes-btn').addEventListener('click', () => {
  alert('Yay! 💖');
});

document.querySelector('.no-btn').addEventListener('click', () => {
  scale += 0.1;
  yesBtn.style.transform = `scale(${scale})`;
});