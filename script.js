const gridContainer = document.querySelector('.grid-container');
const grids = document.querySelectorAll('.grid');

const applyHoverEffect = (e) => {
  e.target.classList.add(':hover');
};

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement('div');
  div.classList.add('grid');
  gridContainer.appendChild(div);
}

grids.forEach(grid => grid.addEventListener('mouseenter', applyHoverEffect));