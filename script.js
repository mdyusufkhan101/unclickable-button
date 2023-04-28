const moveAwayButton = document.querySelector('.move-away-button');
const glowingText = document.querySelector('.glowing-text');
moveAwayButton.addEventListener('mouseover', moveButton);
moveAwayButton.addEventListener('touchstart', moveButton);

glowingText.addEventListener('click', () => {
    glowingText.style.transition = 'all 1s ease-out';
    glowingText.style.top = '100vh';
  });

function moveButton() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const buttonWidth = moveAwayButton.offsetWidth;
  const buttonHeight = moveAwayButton.offsetHeight;
  const maxTop = viewportHeight - buttonHeight - 50;
  const maxLeft = viewportWidth - buttonWidth - 50;
  const newTop = Math.max(50, Math.floor(Math.random() * maxTop));
  const newLeft = Math.max(50, Math.floor(Math.random() * maxLeft));
  moveAwayButton.style.top = newTop + 'px';
  moveAwayButton.style.left = newLeft + 'px';
}

window.addEventListener('resize', function (e) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const buttonWidth = moveAwayButton.offsetWidth;
  const buttonHeight = moveAwayButton.offsetHeight;
  const maxTop = viewportHeight - buttonHeight - 50;
  const maxLeft = viewportWidth - buttonWidth - 50;
  const currentTop = parseInt(moveAwayButton.style.top);
  const currentLeft = parseInt(moveAwayButton.style.left);
  if (currentTop > maxTop) {
    moveAwayButton.style.top = maxTop + 'px';
  }
  if (currentLeft > maxLeft) {
    moveAwayButton.style.left = maxLeft + 'px';
  }
});
