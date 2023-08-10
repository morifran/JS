document.addEventListener("DOMContentLoaded", function () {
    const images = ["Rostov", "Sochi", "Rostov2"];
    let currentIndex = 0;
  
    function updateImage() {
      const imageDiv = document.querySelector(".image");
      const img = document.createElement("img");
      img.src = `projects/${images[currentIndex]}.jpg`;
      img.alt = images[currentIndex];
      imageDiv.innerHTML = "";
      imageDiv.appendChild(img);
  
      const dots = document.querySelectorAll(".slider__dot");
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("slider__dot_active");
        } else {
          dot.classList.remove("slider__dot_active");
        }
      });
    }
  
    document.querySelector(".leftArrow").addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });
  
    document.querySelector(".rightArrow").addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });
  
    updateImage();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const names = document.querySelectorAll('.names h2');
    const leftArrow = document.querySelector('.leftArrow');
    const rightArrow = document.querySelector('.rightArrow');
  
    // Обработчик нажатия на кнопку "Влево"
    leftArrow.addEventListener('click', function() {
      const activeIndex = Array.from(names).findIndex(elem => elem.classList.contains('activeplus'));
      const lastIndex = names.length - 1;
      
      names[activeIndex].classList.remove('activeplus');
      names[activeIndex].classList.add('nonactive');
  
      const prevIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
      names[prevIndex].classList.remove('nonactive');
      names[prevIndex].classList.add('activeplus');
    });
  
    rightArrow.addEventListener('click', function() {
      const activeIndex = Array.from(names).findIndex(elem => elem.classList.contains('activeplus'));
      const lastIndex = names.length - 1;
      
      names[activeIndex].classList.remove('activeplus');
      names[activeIndex].classList.add('nonactive');
  
      const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
      names[nextIndex].classList.remove('nonactive');
      names[nextIndex].classList.add('activeplus');
    });
  });
  