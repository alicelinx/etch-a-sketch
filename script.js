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
const colorButton = document.querySelector('.color-button');

largeGrid.addEventListener('click', () => setGridSize(16));
mediumGrid.addEventListener('click', () => setGridSize(32));
smallGrid.addEventListener('click', () => setGridSize(64));
colorButton.addEventListener('click', () => startColorMode());

const applyColor = (e) => {
  if (e.target.classList.contains('grid')) {
    e.target.classList.add('hovered');
  }
};

const clearGrid = () => {
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.style['background-color'] = 'white';
    grid.classList.remove('hovered');
  });
};

const startColorMode = () => {
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.removeEventListener('mousemove', applyColor);
    grid.addEventListener('mousemove', applyRandomColor);
  });
};

const applyRandomColor = (e) => {
  if (e.target.classList.contains('grid')) {
    const grid = e.target;
    grid.classList.add('hovered');
    const randomColor = getRandomColor();
    grid.style['background-color'] = randomColor;
  }
};

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearGrid);