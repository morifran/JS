const btn = document.querySelector(".button")
const btn2 = document.querySelector(".button2")
const socket = new WebSocket("wss://echo-ws-service.herokuapp.com");
const outputDiv = document.getElementById('output');

socket.onopen = (event) => {
            outputDiv.innerHTML += "WebSocket connection opened.<br><br>         ";
        };

//получаем значения input
function handleInputChange() {
  var inputValue = document.getElementById('myInput').value;
  if (inputValue !== "") {
    return inputValue;
  }
}

//вставляем параграф в див
function addP() {
const myDiv = document.getElementById('myDiv');
const newParagraph = document.createElement('p');
newParagraph.textContent = handleInputChange()
newParagraph.style.color = 'blue';
newParagraph.style.textAlign = 'right';
newParagraph.style.marginLeft = '50px';
myDiv.appendChild(newParagraph);
 
}
 

btn.addEventListener("click", ()=>{
  socket.send(handleInputChange())
//console.log(handleInputChange())
  addP()
})

socket.onmessage = (event) => {
            const message = event.data;
            outputDiv.innerHTML += "Received: " + message + "<br><br>";
        };

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Геолокация не поддерживается вашим браузером.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  fetch('/send-location', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude
    })
  })
  .then(response => response.json())
  .then(data => {
    const myDiv = document.getElementById('myDiv');
    const link = document.createElement('a');
    link.href = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`;
    link.target = '_blank';
    link.textContent = 'Ссылка на карту';
    myDiv.appendChild(link);
  })
  .catch(error => {
    console.error('Произошла ошибка:', error);
  });
}
