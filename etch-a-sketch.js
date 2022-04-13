const rgbInt = () => Math.floor(Math.random() * 255 + 1);
const randomColor = () => `rgb(${rgbInt()}, ${rgbInt()}, ${rgbInt()})`;

const itemNodeList = document.querySelectorAll('.item');
const items = Array.from(itemNodeList);
items.map(item => item.addEventListener('mouseover', (e) =>
    e.target.style.backgroundColor = randomColor()));


