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
      const names = document.querySelectorAll(".name");
      names.forEach((name, index) =>{
        if (index === currentIndex) {
          name.classList.add("activeplus");
        } else {
          name.classList.remove("activeplus");
        }
      });
    }
    document.querySelector(".RostovBut").addEventListener("click", function (){
      currentIndex = 0;
      updateImage();
      const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Rostov-on-Don LCD admiral';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '3.5 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '81 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
    })
    document.querySelector(".SochiBut").addEventListener("click", function (){
      currentIndex = 1;
      updateImage();
      const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Sochi Thieves';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '4 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '105 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
    })
    document.querySelector(".Rostov2But").addEventListener("click", function (){
      currentIndex = 2;
      updateImage();
      const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Rostov-on-Don Patriotic';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '3 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '93 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
    })
    document.querySelector(".fst").addEventListener("click", function (){
      currentIndex = 0;
      updateImage();
      const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Rostov-on-Don LCD admiral';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '3.5 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '81 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
    })
    document.querySelector(".scnd").addEventListener("click", function (){
      currentIndex = 1;
      updateImage();
      const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Sochi Thieves';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '4 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '105 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
    })
    document.querySelector(".thrd").addEventListener("click", function (){
      currentIndex = 2;
      updateImage();
      const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Rostov-on-Don Patriotic';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '3 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '93 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
    })
    document.querySelector(".leftArrow").addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
      if (currentIndex === 0){
        const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Rostov-on-Don LCD admiral';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '3.5 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '81 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
      } else if (currentIndex === 1){
        const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Sochi Thieves';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '4 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '105 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
      } else if (currentIndex === 2){
        const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Rostov-on-Don Patriotic';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '3 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '93 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
      };

    });
  
    document.querySelector(".rightArrow").addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
      if (currentIndex === 0){
        const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Rostov-on-Don LCD admiral';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '3.5 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '81 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
      } else if (currentIndex === 1){
        const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Sochi Thieves';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '4 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '105 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
      } else if (currentIndex === 2){
        const paragraph1 = document.getElementById('advantage1');
      paragraph1.textContent = 'Rostov-on-Don Patriotic';
      const paragraph2 = document.getElementById('advantage2');
      paragraph2.textContent = '3 months';
      const paragraph3 = document.getElementById('advantage3');
      paragraph3.textContent = '93 m2';
      const paragraph4 = document.getElementById('advantage4');
      paragraph4.textContent = 'Upon request';
      };
    });
  
    updateImage();
  });