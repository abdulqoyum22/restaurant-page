import dish1Img from "./assets/dish1-img.jpg";
import dish2Img from "./assets/dish2-img.jpg";
import dish3Img from "./assets/dish3-img.jpg";
import dishBread from "./assets/dish-bread.jpg";
import dishCrispy from "./assets/dish-crispy.jpg";
import dishTomato from "./assets/dish-tomato.jpg";
import dishJuice from "./assets/dish-juice.jpg";
import dishCoffee from "./assets/dish-coffee.jpg";
import dishLemon from "./assets/dish-lemon.jpg";
import chefImg from "./assets/chef-Img.jpg";

function menu() {
const content = document.querySelector("#content");

const menuContainer = document.createElement("div");
menuContainer.classList.add("menu");

const menuTag = document.createElement("div");
menuTag.classList.add("menu-tag");

const leftSymbol = document.createElement("span");
leftSymbol.textContent = "✦";

const discoverText = document.createElement("p");
discoverText.textContent = "DISCOVER";

const rightSymbol = document.createElement("span");
rightSymbol.textContent = "✦";

menuTag.append(leftSymbol, discoverText, rightSymbol);

const menuHero  = document.createElement("div");
menuHero.classList.add("menu-hero");

menuHero.style.backgroundImage = `url(${chefImg})`;

const menuHeroH1 = document.createElement("h1");
menuHeroH1.textContent = "Our Menu"

const menuHeroPara = document.createElement("p");
menuHeroPara.textContent = "Freshly prepared with the finest ingredients";
menuHeroPara.style.color = "#c9a86a"

menuHero.append(menuTag, menuHeroH1, menuHeroPara);


const menuContent = document.createElement("div");
menuContent.classList.add("menu-content");

const menuSubContent1 = document.createElement("div");
menuSubContent1.classList.add("menu-sub");

const cardMain1Text = document.createElement("h3");
cardMain1Text.textContent = "STARTERS";


 const cardMain1 = document.createElement("div");
 cardMain1.classList.add("card-main");

 const cardGB = document.createElement("div");
 cardGB.classList.add("card");
 

 const dishBreadImage = document.createElement("img");
 dishBreadImage.src = dishBread;
 dishBreadImage.alt = "Garlic Bread";
 
 const cardGBH4 = document.createElement("h4");
 cardGBH4.textContent = "Garlic Bread";
 
 const cardGBpara = document.createElement("p");
 cardGBpara.textContent = "Toasted bread with garlic butter and herbs.";

 const priceGB = document.createElement("div");
 priceGB.textContent = "$4.99";
 
 cardGB.append(dishBreadImage, cardGBH4, cardGBpara, priceGB);


 const cardCC = document.createElement("div");
 cardCC.classList.add("card");

 const dishCrispyImage = document.createElement("img");
 dishCrispyImage.src = dishCrispy;
 dishCrispyImage.alt = "Crispy Calamari";
 
 const cardCCH4 = document.createElement("h4");
 cardCCH4.textContent = "Crispy Calamari";
 
 const cardCCpara = document.createElement("p");
 cardCCpara.textContent = "Crispy fried calamari served with aioli sauce.";

 const priceCC = document.createElement("div");
 priceCC.textContent = "$7.99";
 
 cardCC.append(dishCrispyImage, cardCCH4, cardCCpara, priceCC);


 const cardTS = document.createElement("div");
 cardTS.classList.add("card");

 const dishTomatoImage = document.createElement("img");
 dishTomatoImage.src = dishTomato;
 dishTomatoImage.alt = "dish Tomato";
 
 const cardTSH4 = document.createElement("h4");
 cardTSH4.textContent = "Tomato Soup";
 
 const cardTSpara = document.createElement("p");
 cardTSpara.textContent = "Creamy tomato soup with freah basil and herbs.";

 const priceTS = document.createElement("div");
 priceTS.textContent = "$4.99";
 
 cardTS.append(dishTomatoImage, cardTSH4, cardTSpara, priceTS);

cardMain1.append(cardGB, cardCC, cardTS); 
menuSubContent1.append(cardMain1Text, cardMain1);



const menuSubContent2 = document.createElement("div");
menuSubContent2.classList.add("menu-sub");

const cardMain2Text = document.createElement("h3");
cardMain2Text.textContent = "MAIN COURSES";


const cardMain2 = document.createElement("div");
cardMain2.classList.add("card-main");
 
 const card1 = document.createElement("div");
 card1.classList.add("card");
 
 const dish1Image = document.createElement("img");
 dish1Image.src = dish1Img;
 dish1Image.alt = "Dish 1";
 
 const card1H4 = document.createElement("h4");
 card1H4.textContent = "Grilled Chicken Special";
 
 const card1para = document.createElement("p");
 card1para.textContent = "Tender grilled served with seasoned vegetables and signature sauce.";

 const price1 = document.createElement("div");
 price1.textContent = "$14.99";
 
 card1.append(dish1Image, card1H4, card1para, price1);


 const card2 = document.createElement("div");
 card2.classList.add("card");
 
 const dish2Image = document.createElement("img");
 dish2Image.src = dish2Img;
 dish2Image.alt = "Dish 2";
 
 const card2H4 = document.createElement("h4");
 card2H4.textContent = "Seafood Pasta";
 
 const card2Para = document.createElement("p");
 card2Para.textContent = "Creamy pasta loaded with seafood, herbs, and a touch of garlic.";
 
 const price2 = document.createElement("div");
 price2.textContent = "$17.99";

 card2.append(dish2Image, card2H4, card2Para, price2);


 const card3 = document.createElement("div");
 card3.classList.add("card");
 
 const dish3Image = document.createElement("img");
 dish3Image.src = dish3Img;
 dish3Image.alt = "Dish 3";
 
 const card3H4 = document.createElement("h4");
 card3H4.textContent = "Chocolate";
 
 const card3Para = document.createElement("p");
 card3Para.textContent = "A rich chocolate cake with a warm gooey center. The perfect sweet ending.";
 
 const price3 = document.createElement("div");
 price3.textContent = "$14.99";

 card3.append(dish3Image, card3H4, card3Para, price3);
 
cardMain2.append(card1, card2, card3);
menuSubContent2.append(cardMain2Text, cardMain2);


const menuSubContent3 = document.createElement("div");
menuSubContent3.classList.add("menu-sub");

const cardMain3Text = document.createElement("h3");
cardMain3Text.textContent = "DRINKS";


 const cardMain3 = document.createElement("div");
 cardMain3.classList.add("card-main");

 const cardFOJ = document.createElement("div");
 cardFOJ.classList.add("card");
 

 const dishJuiceImage = document.createElement("img");
 dishJuiceImage.src = dishJuice;
 dishJuiceImage.alt = "drink 1";
 
 const cardFOJH4 = document.createElement("h4");
 cardFOJH4.textContent = "Fresh Orange Juice";
 
 const cardFOJpara = document.createElement("p");
 cardFOJpara.textContent = "Freshly squeezed orange juice.";

 const priceFOJ = document.createElement("div");
 priceFOJ.textContent = "$3.49";
 
 cardFOJ.append(dishJuiceImage, cardFOJH4, cardFOJpara, priceFOJ);


 const cardIC = document.createElement("div");
 cardIC.classList.add("card");

 const dishCoffeeImage = document.createElement("img");
 dishCoffeeImage.src = dishCoffee;
 dishCoffeeImage.alt = "drink 2";
 
 const cardICH4 = document.createElement("h4");
 cardICH4.textContent = "Iced Coffee";
 
 const cardICpara = document.createElement("p");
 cardICpara.textContent = "Chilled coffee served over ice.";

 const priceIC = document.createElement("div");
 priceIC.textContent = "$3.99";
 
 cardIC.append(dishCoffeeImage, cardICH4, cardICpara, priceIC);


 const cardLE = document.createElement("div");
 cardLE.classList.add("card");

 const dishLemonImage = document.createElement("img");
 dishLemonImage.src = dishLemon;
 dishLemonImage.alt = "drink 3";
 
 const cardLEH4 = document.createElement("h4");
 cardLEH4.textContent = "Lemonade";
 
 const cardLEpara = document.createElement("p");
 cardLEpara.textContent = "Refreshing lemonade with mint.";

 const priceLE = document.createElement("div");
 priceLE.textContent = "$2.99";
 
 cardLE.append(dishLemonImage, cardLEH4, cardLEpara, priceLE);

cardMain3.append(cardFOJ, cardIC, cardLE); 
menuSubContent3.append(cardMain3Text, cardMain3);

menuContent.append(menuSubContent1, menuSubContent2, menuSubContent3);

menuContainer.append(menuHero, menuContent);

content.appendChild(menuContainer);
};

export default menu;