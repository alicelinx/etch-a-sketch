const gridContainer = document.querySelector('.grid-container');

const applyHoverEffect = (e) => {
  if (e.target.classList.contains('grid')) {
    e.target.classList.add(':hover');
  }
};

const applyColor = (e) => {
  if (e.target.classList.contains('grid')) {
    e.target.classList.add('grid-clicked');
  }
};

const clearGrid = () => {
  const divs = document.querySelectorAll('.grid-clicked');
  divs.forEach(div => div.classList.remove('grid-clicked'));
};

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement('div');
  div.classList.add('grid');
  gridContainer.appendChild(div);
}

const grids = document.querySelectorAll('.grid');
grids.forEach(grid => grid.addEventListener('click', applyColor));
grids.forEach(grid => grid.addEventListener('mouseenter', applyHoverEffect));

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearGrid);