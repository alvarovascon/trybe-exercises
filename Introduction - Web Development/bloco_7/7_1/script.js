const button = document.querySelector('button');

button.addEventListener('click', () => {
  const clickCountIndicator = document.querySelector('span');
  clickCountIndicator.innerHTML = parseInt(clickCountIndicator.innerHTML) + 1;
})