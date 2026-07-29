import heroImg from "./assets/hero-img.jpg";
import aboutImg from "./assets/about-img.jpg";
import dish1Img from "./assets/dish1-img.jpg";
import dish2Img from "./assets/dish2-img.jpg";
import dish3Img from "./assets/dish3-img.jpg";

function home() { 


const content = document.querySelector("#content");

const homeContainer = document.createElement("div");
homeContainer.classList.add("home-container");

const hero = document.createElement("div");
hero.classList.add("hero");

const heroContainer = document.createElement("div");
heroContainer.classList.add("hero-container");

const heroTextContainer = document.createElement("div");
heroTextContainer.classList.add("hero-text");

const heading = document.createElement("h1");
heading.textContent = "Good Food,";

const heading2 = document.createElement("h1");
heading2.textContent = "Great ";

const span = document.createElement("span");
span.textContent = "Moments";

const paraContainer = document.createElement("div");
paraContainer.classList.add("para-container");

const paragraph = document.createElement("p");
paragraph.textContent = "Welcome to Taste Haven, where delicious";

const paragraph2 = document.createElement("p")
paragraph2.textContent = "meals, fresh ingredients, and warm";

const paragraph3 = document.createElement("p");
paragraph3.textContent = "hospitality come together."

paraContainer.append(paragraph, paragraph2, paragraph3);

const heroBtn = document.createElement("button");
heroBtn.textContent = "View Our Menu"

const buttonSymbol = document.createElement("span");
buttonSymbol.classList.add("button-symbol");
buttonSymbol.textContent = " →";

heroBtn.appendChild(buttonSymbol)

hero.style.backgroundImage = `url(${heroImg})`;

heading2.appendChild(span);
heroTextContainer.append(heading, heading2);
heroContainer.append(heroTextContainer, paraContainer, heroBtn);
hero.appendChild(heroContainer);
homeContainer.appendChild(hero);

// ====================================================================

const about = document.createElement("div");
about.classList.add("about");

const aboutDiv = document.createElement("div");
aboutDiv.classList.add("about-div");

const aboutImage = document.createElement("img");
aboutImage.src = aboutImg;
aboutImage.alt = "About Image";
aboutImage.classList.add("about-image");

aboutDiv.appendChild(aboutImage);



const aboutText = document.createElement("div");
aboutText.classList.add("about-text");

const aboutH5 = document.createElement("h4");
aboutH5.textContent = "About Us";

const aboutLine = document.createElement("div");
aboutLine.classList.add("section-line");

const aboutH2 = document.createElement("h1");
aboutH2.textContent = "Our Passion, Your Experience";

const aboutParaContainer = document.createElement("div");
aboutParaContainer.classList.add("about-para");

const aboutPara1 = document.createElement("p");
aboutPara1.textContent = "At Taste Haven, we believe that great food brings";

const aboutPara2 = document.createElement("p");
aboutPara2.textContent = "people together. Our chefs carefully craft every";

const aboutPara3 = document.createElement("p");
aboutPara3.textContent = "dish using the freshest ingredients to deliver";

const aboutPara4 = document.createElement("p");
aboutPara4.textContent = "flavors you'll love."

aboutParaContainer.append(aboutPara1, aboutPara2, aboutPara3, aboutPara4);

const aboutSub = document.createElement("div");
aboutSub.classList.add("about-sub");

const aboutSubPara = document.createElement("p");
aboutSubPara.textContent = "Made with love by our";

const aboutSubPara2 = document.createElement("p");
aboutSubPara2.style.fontWeight = "bold"
aboutSubPara2.textContent = "expert chefs";

aboutSub.append(aboutSubPara, aboutSubPara2);
aboutText.append(aboutH5, aboutH2, aboutLine, aboutParaContainer, aboutSub);
about.append(aboutDiv, aboutText);
homeContainer.appendChild(about);

// ====================================================================

const choice = document.createElement("div");
choice.classList.add("choice");

const choiceH5 = document.createElement("h4");
choiceH5.classList.add("choice-head");
choiceH5.textContent = "Why Choose Us";

const choiceLine = document.createElement("div");
choiceLine.classList.add("section-line");

const choiceH2 = document.createElement("h2");
choiceH2.textContent = "Because You Deserve The Best";

const choiceCards = document.createElement("div");
choiceCards.classList.add("choice-cards");


const cards1 = document.createElement("div");
cards1.classList.add("cards");

const cards1H4 = document.createElement("h4");
cards1H4.textContent = "Fresh Ingredients";

const cardsPara = document.createElement("p");
cardsPara.textContent = "We use only the freshest and highest quality ingredients.";

cards1.append(cards1H4, cardsPara);


const cards2 = document.createElement("div");
cards2.classList.add("cards");

const cards2H4 = document.createElement("h4");
cards2H4.textContent = "Great Service";

const cards2Para = document.createElement("p");
cards2Para.textContent = "We are here to give you the best service and make you feel at home.";

cards2.append(cards2H4, cards2Para);


const cards3 = document.createElement("div");
cards3.classList.add("cards");

const cards3H4 = document.createElement("h4");
cards3H4.textContent = "Expert Chefs";

const cards3Para = document.createElement("p");
cards3Para.textContent = "Our chefs have years of experience in creating amazing dishes.";

cards3.append(cards3H4, cards3Para);


const cards4 = document.createElement("div");
cards4.classList.add("cards");

const cards4H4 = document.createElement("h4");
cards4H4.textContent = "Cozy Atmosphere";

const cards4Para = document.createElement("p");
cards4Para.textContent = "Enjoy your meal in our warm, comfortable, and elegant space.";

cards4.append(cards4H4, cards4Para);


const cards5 = document.createElement("div");
cards5.classList.add("cards");

const cards5H4 = document.createElement("h4");
cards5H4.textContent = "Affordable Prices";

const cards5para = document.createElement("p");
cards5para.textContent = "Delicious food at prices that won't break the bank.";

cards5.append(cards5H4, cards5para);

choiceCards.append(cards1, cards2, cards3, cards4, cards5);
choice.append(choiceH5, choiceH2, choiceLine, choiceCards);
homeContainer.appendChild(choice);

// ====================================================================

const dishes = document.createElement("div");
dishes.classList.add("dishes");

const dishesH4 = document.createElement("h4");
dishesH4.textContent = "Popular Dishes";
dishesH4.classList.add("dishes-heading");

const dishesH2 = document.createElement("h2");
dishesH2.textContent = "Customer Favorites";

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");



const card1 = document.createElement("div");
card1.classList.add("card");

const dish1Image = document.createElement("img");
dish1Image.src = dish1Img;
dish1Image.alt = "Dish 1";

const card1H4 = document.createElement("h4");
card1H4.textContent = "Grilled Chicken Special";

const card1para = document.createElement("div");
card1para.classList.add("card-para");

const card1para1 = document.createElement("p");
card1para1.textContent = "Tender grilled served with";

const card1para2 = document.createElement("p");
card1para2.textContent = "seasoned vegetables and our";

const card1para3 = document.createElement("p")
card1para3.textContent = "signature sauce."

card1para.append(card1para1, card1para2, card1para3);

card1.append(dish1Image, card1H4, card1para);


const card2 = document.createElement("div");
card2.classList.add("card");

const dish2Image = document.createElement("img");
dish2Image.src = dish2Img;
dish2Image.alt = "Dish 2";

const card2H4 = document.createElement("h4");
card2H4.textContent = "Seafood Pasta";

const card2Para = document.createElement("div");
card2Para.classList.add("card-para");

const card2para1 = document.createElement("p");
card2para1.textContent = "Creamy pasta loaded with fresh";

const card2para2 = document.createElement("p");
card2para2.textContent = "seafood, herbs, and a touch of";

const card2para3 = document.createElement("p");
card2para3.textContent = "garlic.";

card2Para.append(card2para1, card2para2, card2para3);

card2.append(dish2Image, card2H4, card2Para);


const card3 = document.createElement("div");
card3.classList.add("card");

const dish3Image = document.createElement("img");
dish3Image.src = dish3Img;
dish3Image.alt = "Dish 3";

const card3H4 = document.createElement("h4");
card3H4.textContent = "Chocolate";

const card3Para = document.createElement("div");
card3Para.classList.add("card-para");

const card3para1 = document.createElement("p");
card3para1.textContent = "A rich chocolate cake with a warm,";

const card3para2 = document.createElement("p");
card3para2.textContent = "gooey center. The perfect";

const card3para3 = document.createElement("p");
card3para3.textContent = "sweet ending.";

card3Para.append(card3para1, card3para2, card3para3);

card3.append(dish3Image, card3H4, card3Para);

cardContainer.append(card1, card2, card3);
dishes.append(dishesH4, dishesH2, cardContainer);
homeContainer.appendChild(dishes);

// ====================================================================

const info = document.createElement("div");
info.classList.add("info");

const infoCards1 = document.createElement("div");
infoCards1.classList.add("info-cards");

const time1 = document.createElement("div");
time1.classList.add("time");
time1.textContent = "🕒 Opening hours";

const time2 = document.createElement("div");
time2.classList.add("time");
time2.textContent = "Mon - Thu       10:00 AM - 10:00 PM";

const time3 = document.createElement("div");
time3.classList.add("time");
time3.textContent = "Fri - Sat       10:00 AM - 12:00 AM";

const time4 = document.createElement("div");
time4.classList.add("time");
time4.textContent = "Sunday          12:00 PM - 09:00 PM";

infoCards1.append(time1, time2, time3, time4);


const infoCards2 = document.createElement("div");
infoCards2.classList.add("info-cards");

const location1 = document.createElement("div");
location1.classList.add("location");
location1.textContent = "📍 Our location";

const location2 = document.createElement("div");
location2.classList.add("location");

const location2Para1 = document.createElement("p");
location2Para1.textContent = "123 Food Street, Flavor Town,";

const location2Para2 = document.createElement("p");
location2Para2.textContent = "Delicious City, FC 12345";

location2.append(location2Para1, location2Para2);
infoCards2.append(location1, location2);


const infoCards3 = document.createElement("div");
infoCards3.classList.add("info-cards");

const contact1 = document.createElement("div");
contact1.classList.add("contact");
contact1.textContent = "📞 Contact Us";

const contact2 = document.createElement("div");
contact2.classList.add("contact");
contact2.textContent = "333 333 333";

infoCards3.append(contact1, contact2);

info.append(infoCards1, infoCards2, infoCards3);
homeContainer.appendChild(info);

// ====================================================================

const footer = document.createElement("footer");
footer.textContent = "♡ Come hungry, leave happy.";

homeContainer.appendChild(footer);
content.appendChild(homeContainer);
};

export default home;