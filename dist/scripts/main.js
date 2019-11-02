'use strict';

const list = [].slice.call(document.getElementsByTagName('li'));
let res = [];
const symbols = ['♥', '♦', '♣', '♠'];
let counter = 42;

document.addEventListener('DOMContentLoaded', () => {
  list.forEach((item) => {
    item.textContent = symbols[Math.floor(Math.random() * Math.floor(4))];
    if (item.textContent === '♥') {
      item.style.cssText = 'color: rgb(196, 10, 10);';
    }
    if (item.textContent === '♦') {
      item.style.cssText = 'color: rgb(190, 80, 29);';
    }
  });
});

list.forEach((item, i) => {
  item.onclick = () => {
    res.forEach((index) => {
      list[index].style.cssText = 'background-color: white;';
    });
    res = [];

    if (item.textContent !== '') {
      res.push(i);

      searchNear(i);

      res.forEach((index) => {
        list[index].style.cssText = 'background-color: lightblue;';
      });

      res.forEach((index) => {
        list[index].textContent = '';
      });

      counter = counter - res.length;
      document.getElementById('counter').textContent = counter;
      if (counter === 0) {
        document.getElementById('congratulation').style
          .cssText = 'display: inline;';
      };
    };
  };
});

document.getElementById('reset').onclick = () => {
  location.reload();
};

function searchNear(i) {
  if (!res.includes(i + 1)) {
    if ((i + 1) % 6 !== 0) {
      if (list[i].textContent === list[i + 1].textContent) {
        res.push(i + 1);
        searchNear(i + 1);
      };
    };
  };

  if (!res.includes(i - 1)) {
    if (i % 6 !== 0) {
      if (list[i].textContent === list[i - 1].textContent) {
        res.push(i - 1);
        searchNear(i - 1);
      };
    };
  };

  if (!res.includes(i - 6)) {
    if (list[i - 6]) {
      if (list[i].textContent === list[i - 6].textContent) {
        res.push(i - 6);
        searchNear(i - 6);
      };
    };
  };

  if (!res.includes(i + 6)) {
    if (list[i + 6]) {
      if (list[i].textContent === list[i + 6].textContent) {
        res.push(i + 6);
        searchNear(i + 6);
      };
    };
  };
};
