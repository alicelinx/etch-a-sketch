const gridContainer = document.querySelector('.grid-container');

const setGridSize = function(size) {
  gridContainer.innerHTML = '';
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    gridContainer.appendChild(div);
  }
  gridContainer.style["grid-template-columns"] = `repeat(${size}, 1fr)`;

  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => grid.addEventListener('mousemove', applyColor));
};

const largeGrid = document.querySelector('.large-grid');
const mediumGrid = document.querySelector('.medium-grid');
const smallGrid = document.querySelector('.small-grid');

largeGrid.addEventListener('click', () => setGridSize(16));
mediumGrid.addEventListener('click', () => setGridSize(32));
smallGrid.addEventListener('click', () => setGridSize(64));

const applyColor = (e) => {
  if (e.target.classList.contains('grid')) {
    e.target.classList.add('hovered');
  }
};

const clearGrid = () => {
  const divs = document.querySelectorAll('.hovered');
  divs.forEach(div => div.classList.remove('hovered'));
};

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearGrid);