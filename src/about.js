import aboutImg from "./assets/aboutImg2.jpg";
import chefImgFile from "./assets/chefImgFile.jpg";

function about() {
const content = document.querySelector("#content");
const hero = document.createElement("section");
hero.classList.add("about-hero");

const heading = document.createElement("h1");
heading.textContent = "About Us";

const text = document.createElement("p");
text.textContent = "Taste Haven is dedicated to creating memorable dining experiences.";

hero.append(heading, text);


const story = document.createElement("section");
story.classList.add("story");

const image = document.createElement("img");
image.src = aboutImg;

const storyText = document.createElement("div");
storyText.classList.add("story-text");

const title = document.createElement("h2");
title.textContent = "Authentic Dishes crafted with love";

const paragraph = document.createElement("p");
paragraph.textContent = "Since opening our doors, Taste Haven has focused on quality ingredients and warm hospitality";

storyText.append(title, paragraph);
story.append(image, storyText);

const chef = document.createElement("section");
chef.classList.add("chef");

const chefHeading = document.createElement("h2");
chefHeading.textContent = "Meet Our Chef";

const chefText = document.createElement("p");
chefText.textContent = "Chef John brings years of culinary experience to every dish.";

const chefImg = document.createElement("img");
chefImg.src = chefImgFile;

chef.append(chefHeading, chefText, chefImg);

content.append(hero, story, chef);
};

export default about;