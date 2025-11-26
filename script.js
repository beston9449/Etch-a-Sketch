let containerEl = document.querySelector('.container');
let body = document.querySelector('body');
let clearBtn = document.createElement('button');
let btnContainer = document.createElement('div');
body.appendChild(btnContainer);
let btnA = document.createElement('button');
let btnB = document.createElement('button');
let btnC = document.createElement('button');
btnContainer.classList.add('buttonContainer');

btnContainer.appendChild(btnA);
btnContainer.appendChild(btnB);
btnContainer.appendChild(btnC);

btnA.textContent = '16x16';
btnB.textContent = '32x32';
btnC.textContent = '64x64';

function changeGrid(num) {
  containerEl.innerHTML = '';

  let gridSize = Math.sqrt(num);
  let squareWidth = 100 / gridSize;

  for (let i = 0; i < num; i++) {
    let div = document.createElement('div');
    div.classList.add('flexy');
    containerEl.appendChild(div);
    div.style.width = `${squareWidth}%`;
  }

  function randColor(e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  document.querySelectorAll('.flexy').forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      randColor(e);
      let currentOpacity = e.target.style.opacity;
      if (!currentOpacity) {
        currentOpacity = 0;
      }
      currentOpacity = Number(currentOpacity) + 0.1;
      currentOpacity = Math.min(currentOpacity, 1);
      e.target.style.opacity = currentOpacity;
    });
  });
}
changeGrid(256);
btnA.addEventListener('click', () => changeGrid(256));
btnB.addEventListener('click', () => changeGrid(1024));
btnC.addEventListener('click', () => changeGrid(4096));
btnContainer.appendChild(clearBtn);
clearBtn.textContent = 'Clear';

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.flexy').forEach((square) => {
    square.style.backgroundColor = '';
    square.style.opacity = '';
  });
});
