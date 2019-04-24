'use strict';

{
  const btn = document.getElementById('main');

  btn.addEventListener('click', () =>{
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉';
    } else if (n < 0.2) {
      btn.textContent = '吉';
    } else {
      btn.textContent = '大凶';
    }
    // const results = ['大吉','吉','凶','末吉'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // btn.textContent = n;
    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '吉';
    //     break
    //   case 2:
    //     btn.textContent = '凶';
    //     break
    // }
  });
  btn.addEventListener('mousedown', () =>{
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup',() =>{
    btn.classList.remove('pressed');
  });
}
