const loadButton = document.getElementById('loadButton');
const imagesContainer = document.getElementById('imagesContainer');
const loader = document.getElementById('loader');

loadButton.addEventListener('click', async () => {
  try {
    loader.style.display = 'block';

    const response = await fetch('https://dog.ceo/api/breeds/image/random/10'); // Здесь указываем API для собачек
    const data = await response.json();

    imagesContainer.innerHTML = ''; // Очищаем предыдущие изображения

    data.message.forEach(imageUrl => {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageElement.alt = 'Фотография собачки';
      imageElement.className = 'image';
      imagesContainer.appendChild(imageElement);
    });
  } catch (error) {
    console.error('Error loading images:', error);
  } finally {
    loader.style.display = 'none';
  }
});
