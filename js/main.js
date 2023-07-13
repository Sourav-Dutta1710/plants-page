let flag=-1;
const images = ["black","beaker","white","black","beaker"];
const labels = ["Rubber plants","String of pearls","Birds of paradise","Rubber plants","String of pearls"];
const clients = ["second-model","third-model","model","second-model","third-model"];

function slide(slideRight,section){
    document.getElementById("collectionItemLeft").classList.add("collectionItem");
    document.getElementById("collectionItemMiddle").classList.add("collectionItem");
    document.getElementById("collectionItemRight").classList.add("collectionItem");
    document.getElementById("clientsItem").classList.add("collectionItem");
    if(slideRight)
      flag++;
    else
      flag--;

    if(slideRight && flag === 3)
    flag = 0;

    if(!slideRight && flag === -2)
      flag = 1;
    else if(!slideRight && flag === -1)
      flag = 2;

    if(section === 0)
       showCollection();
    else
       showClients()

   setTimeout(addAnimation,2000);
}

function showCollection(){
    document.getElementById("collectionItemLeft").innerHTML=`
    <img src="./images/${images[flag]}.png" alt="symbol" class="img-fluid" /><br>
    ${labels[flag]}`;
    document.getElementById("collectionItemMiddle").innerHTML=`
    <img src="./images/${images[flag+1]}.png" alt="symbol" class="img-fluid" /><br>
    ${labels[flag+1]}`;
    document.getElementById("collectionItemRight").innerHTML=`
    <img src="./images/${images[flag+2]}.png" alt="symbol" class="img-fluid" /><br>
    ${labels[flag+2]}`;
}

function showClients(){
    document.getElementById("clientsItem").innerHTML=`
    <p class="clientsPara p-3 ps-xl-5 ms-xl-5">
    <i class="fs-1 fa-solid fa-quote-left fa-2xl text-white"></i><br>
    It is a long established fact that a reader will be distracted by the readable content of a page when It
    is a long . It is a long .It is a long established fact that a reader will be . It is a long
    established fact that a reader .
  <i class="fs-1 fa-solid fa-quote-right fa-2xl text-white"></i>
  </p>
  <img class="pt-3 clientsItem" src="./images/${clients[flag]}.png" alt="symbol" />`;
}


function showPlants(){
    document.getElementById("heroRight").classList.toggle("heroItemRight");
    document.getElementById("heroRight").classList.toggle("heroCenterItem");
    document.getElementById("heroCenter").classList.toggle("heroItemCenter");
    document.getElementById("heroCenter").classList.toggle("heroRightItem");
    document.getElementById("heroRight").classList.add("collectionItem");
    document.getElementById("heroCenter").classList.add("collectionItem");
    setTimeout(addAnimation,2000);
}

function addAnimation(){
    document.getElementById("collectionItemLeft").classList.remove("collectionItem");
    document.getElementById("collectionItemMiddle").classList.remove("collectionItem");
    document.getElementById("collectionItemRight").classList.remove("collectionItem");
    document.getElementById("clientsItem").classList.remove("collectionItem");
    document.getElementById("heroRight").classList.remove("collectionItem");
    document.getElementById("heroCenter").classList.remove("collectionItem");
    
}
