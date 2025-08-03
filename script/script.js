//Jбьект с карточками
const products = [
  { id: 1, name: 'Taxes & Efficiency', description: 'Business', image: './image/bg.png' },
  { id: 2, name: 'Taxes & Efficiency', image: './image/2.png' },
  { id: 3, name: 'Товар 3', image: './image/3.png' },
  { id: 4, name: 'Товар 4', image: './image/4.png' },
  { id: 5, name: 'Товар 5', image: './image/5.png' },
  { id: 6, name: 'Товар 6', image: './image/6.png' }
];
const productGrid = document.getElementById('productGrid');
products.forEach((product, index) => {
  const card = document.createElement('div');
  card.className = 'product_card';
  GamepadButton.className = 'slider_button';
//Jбращение к элементам
  const infoHTML = index === 0
    ? `
      <div class="product_info">
        <div class="product_class">
          <h3 class="product_title">${product.name}</h3>
          <h3 class="product_description">${product.description}</h3>
        </div>
        <button class="product_btn open-window-btn">
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00511 18.5377V11.4887H0.85011V7.46068H8.00511V0.411675H12.2451V7.46068H19.4001V11.4887H12.2451V18.5377H8.00511Z" fill="#181818"/>
          </svg>
        </button>
      </div>
    `
    : '';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    ${infoHTML}
  `;
  productGrid.appendChild(card);
});
//Открытие модального окна
document.addEventListener("click", function(e) {
  if (e.target.closest(".open-window-btn")) {
    showWindow();
  }
});
//Закрытие модального окна
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modalWindow").style.display = "none";
});
//Функция показа окна
function showWindow() {
  document.getElementById("modalWindow").style.display = "block";
}
//функция слайдера
const sliderContainer = document.getElementById('productGrid');
function slide(direction) {
  if (window.innerWidth > 768) return; 
  const card = sliderContainer.querySelector('.product_card');
  if (!card) return;
  const cardWidth = card.offsetWidth + 20;
  if (direction === 'next') {
    sliderContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
  } else if (direction === 'prev') {
    sliderContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }
}
document.querySelector('.slider_button.next').addEventListener('click', () => {
  slide('next');
});
document.querySelector('.slider_button.prev').addEventListener('click', () => {
  slide('prev');
});
//валидация и обработка формы обратной связи
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#form_review');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const email_company = formData.get('email_company');
    if (!name || !email || !phone || !email_company) {
      alert('Пустые поля!');
      return;
    }
    console.log('Имя: ', name);
    console.log('Имя: ', email);
    console.log('Имя: ', phone);
    console.log('Имя: ', email_company);

    alert(`Спасибо, ${name}! Ваш запрос обработан.`)
  })
  
})