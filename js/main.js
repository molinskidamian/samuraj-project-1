const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');
let counter = 0;

btn.addEventListener('click', () => {
  counter = counter += 1;
  const item = document.createElement('p');
  const number = document.createTextNode(counter);
  item.appendChild(number);

  if (counter % 5) {
    item.classList.add('circle');
  }

  item.classList.add('item');
  wrapper.appendChild(item);
});
