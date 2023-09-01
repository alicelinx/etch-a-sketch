const gridContainer = document.querySelector('.grid-container');
const grids = document.querySelectorAll('.grid');

const applyHoverEffect = (e) => {
  if (e.target.classList.contains('grid')) {
    e.target.classList.add(':hover');
  }
};

const applyColor = (e) => {
  if (e.target.classList.contains('grid:hover')) {
    e.target.classList.remove('grid:hover').add('grid-clicked');
  }
};

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement('div');
  div.classList.add('grid');
  gridContainer.appendChild(div);
}

grids.forEach(grid => grid.addEventListener('click', applyColor));
grids.forEach(grid => grid.addEventListener('mouseenter', applyHoverEffect));