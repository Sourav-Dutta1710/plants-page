const images = ["black", "beaker", "white", "black", "beaker"];
const labels = ["Rubber plants", "String of pearls", "Birds of paradise", "Rubber plants", "String of pearls"];
const clients = ["second-model", "third-model", "model", "second-model", "third-model"];
let flag = -1;


function showCollection() {
  document.getElementById("collection-item-left").innerHTML = `
    <img src="./images/${images[flag]}.png" alt="plant image" class="img-fluid" /><br>
    ${labels[flag]}`;
  document.getElementById("collection-item-middle").innerHTML = `
    <img src="./images/${images[flag + 1]}.png" alt="plant image" class="img-fluid" /><br>
    ${labels[flag + 1]}`;
  document.getElementById("collection-item-right").innerHTML = `
    <img src="./images/${images[flag + 2]}.png" alt="plant inage" class="img-fluid" /><br>
    ${labels[flag + 2]}`;
}

function showClients() {
  document.getElementById("clients-item").innerHTML = `
    <p class="clients-para p-3 ps-xl-5 ms-xl-5">
    <i class="fs-1 fa-solid fa-quote-left fa-2xl text-white"></i><br>
    It is a long established fact that a reader will be distracted by the readable content of a page when It
    is a long . It is a long .It is a long established fact that a reader will be . It is a long
    established fact that a reader .
  <i class="fs-1 fa-solid fa-quote-right fa-2xl text-white"></i>
  </p>
  <img class="pt-3 clients-item" src="./images/${clients[flag]}.png" alt="symbol" />`;
}


function showPlants() {
  document.getElementById("hero-right").classList.toggle("hero-item-right");
  document.getElementById("hero-right").classList.toggle("hero-center-item");
  document.getElementById("hero-center").classList.toggle("hero-item-center");
  document.getElementById("hero-center").classList.toggle("hero-right-item");
  document.getElementById("hero-right").classList.add("collection-item");
  document.getElementById("hero-center").classList.add("collection-item");
  document.getElementById("slider-left").classList.toggle("heading-text");
  document.getElementById("slider-right").classList.toggle("heading-text");
  setTimeout(addAnimation, 2000);
}

function addAnimation() {
  document.getElementById("collection-item-left").classList.remove("collection-item");
  document.getElementById("collection-item-middle").classList.remove("collection-item");
  document.getElementById("collection-item-right").classList.remove("collection-item");
  document.getElementById("clients-item").classList.remove("collection-item");
  document.getElementById("hero-right").classList.remove("collection-item");
  document.getElementById("hero-center").classList.remove("collection-item");

}


function slide(slideRight, section) {
  document.getElementById("collection-item-left").classList.add("collection-item");
  document.getElementById("collection-item-middle").classList.add("collection-item");
  document.getElementById("collection-item-right").classList.add("collection-item");
  document.getElementById("clients-item").classList.add("collection-item");

  if (slideRight && flag === 2)
    flag = 0;
  else if (slideRight)
    flag++;
  else if (flag === -1)
    flag = 1;
  else if (flag === 0)
    flag = 2;
  else
    flag--;

  if (section === 0)
    showCollection();
  else
    showClients()

  setTimeout(addAnimation, 2000);
}