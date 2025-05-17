const products = [
  { img: "./img/1.png", name: "Orange", price: 1.75, color: 1 },
        { img: "./img/2.png", name: "blue", price: 1.75, color: 2 },
        { img: "./img/3.png", name: "Pink", price: 2.10, color: 3 },
        { img: "./img/4.png", name: "Gray", price: 1.25, color: 4 },
        { img: "./img/2.png", name: "Blue", price: 1.80, color: 2 },
        { img: "./img/1.png", name: "Orange", price: 1.25, color: 1 },
        { img: "./img/4.png", name: "Gray", price: 2.00, color: 4 },
        { img: "./img/3.png", name: "Pink", price: 1.75, color: 3 },
        { img: "./img/3.png", name: "Pink", price: 3.30, color: 3 },
        { img: "./img/1.png", name: "Orange", price: 2.80, color: 1},
        { img: "./img/2.png", name: "Blue", price: 1.75, color: 2 },
        { img: "./img/4.png", name: "Gray", price: 2.10, color: 4 },
];

function renderCards(data) {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  data.forEach((card) => {
    cards.innerHTML += `
      <div class="card">
        <img src="${card.img}" alt="${card.name}" />
        <h3>${card.name}</h3>
        <div class="btm">
          <div class="left">
            <p class="top">Current bid</p>
            <div class="bottom">
              <img src="./img/icon.png" alt="icon" />
              <p>${card.price}</p>
            </div>
          </div>
          <div class="right">
            <a href="#" class="card_btm">PLACE BID</a>
          </div>
        </div>
      </div>
    `;
  });
}

document.getElementById("all").addEventListener("click", (e) => {
  e.preventDefault();
  const sorted = [...cardsData].sort((a, b) => a.color - b.color);
  renderCards(sorted);
});

document.getElementById("sort-name").addEventListener("click", (e) => {
  e.preventDefault();
  const sorted = [...cardsData].sort((a, b) => a.name.localeCompare(b.name));
  renderCards(sorted);
});

document.getElementById("sort-price").addEventListener("click", (e) => {
  e.preventDefault();
  const sorted = [...cardsData].sort((a, b) => a.price - b.price);
  renderCards(sorted);
});
document.getElementById("sort-color").addEventListener("click", (e) => {
  e.preventDefault();
  const sorted = [...cardsData].sort((a, b) => a.color - b.color);
  renderCards(sorted);
});

document.getElementById("sort-name").addEventListener("click", (e) => {
  e.preventDefault();
  const sorted = [...cardsData].sort((a, b) => a.name.localeCompare(b.name));
  renderCards(sorted);
});

document.getElementById("sort-price").addEventListener("click", (e) => {
  e.preventDefault();
  const sorted = [...cardsData].sort((a, b) => a.price - b.price);
  renderCards(sorted);
});

renderCards(cardsData);


const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burgerBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
  burgerBtn.classList.toggle('open');
  document.body.classList.toggle('noscroll', mobileMenu.classList.contains('open'));
});


document.addEventListener('click', function(e) {
  if (
    mobileMenu.classList.contains('open') &&
    !mobileMenu.contains(e.target) &&
    !burgerBtn.contains(e.target)
  ) {
    mobileMenu.classList.remove('open');
    burgerBtn.classList.remove('open');
    document.body.classList.remove('noscroll');
  }
});

function sortProducts(productsArray) {
  const sortOrder = sortOrderSelect.value;
  if (sortOrder === 'lowest') {
      return productsArray.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highest') {
      return productsArray.sort((a, b) => b.price - a.price);
  }
  return productsArray;
}