function contact() {

const content = document.querySelector("#content");

const contactContainer = document.createElement("div");
contactContainer.classList.add("contact-second");

const contactText = document.createElement("div");
contactText.classList.add("contact-hero");

const contactTextH1 = document.createElement("h1");
contactTextH1.textContent = "Contact";

const contactBtn = document.createElement("button");
contactBtn.textContent = "Back To Home";

contactText.append(contactTextH1, contactBtn);

// ====================================================================

const contactContent = document.createElement("div");
contactContent.classList.add("contact-content");

const contactMain = document.createElement("div");
contactMain.classList.add("contact-main");

const address = document.createElement("div");
address.classList.add("address");

const addressH4 = document.createElement("h4");
addressH4.textContent = "Address";

const addressPara1 = document.createElement("p");
addressPara1.textContent = "123 Food Street, Flavor Town,";

const addressPara2 = document.createElement("p");
addressPara2.textContent = "Delicious City, FC 12345";

address.append(addressH4, addressPara1, addressPara2);

const phone = document.createElement("div");
phone.classList.add("phone");

const phoneH4 = document.createElement("h4");
phoneH4.textContent = "Phone";

phone.prepend(phoneH4);

const phonePara1 = document.createElement("p");
phonePara1.textContent = "Online Reservation";

const phonePara2 = document.createElement("p");
phonePara2.textContent = "333 333 333";
phonePara2.classList.add("phone-number");

phone.append(phonePara1, phonePara2);

const workingHour = document.createElement("div");
workingHour.classList.add("working-hour");

const workingHourH4 = document.createElement("h4");
workingHourH4.textContent = "Working Hours";

workingHour.prepend(workingHourH4);

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

workingHour.append(time1, time2, time3, time4);

const email = document.createElement("div");
email.classList.add("email");

const emailH4 = document.createElement("h4");
emailH4.textContent = "Email";

const emailPara = document.createElement("p");
emailPara.textContent = "tastehaven@gmail.com";

email.append(emailH4, emailPara);

contactMain.append(address, phone, workingHour, email);

// ====================================================================

const formConatiner = document.createElement("div");
formConatiner.classList.add("form-container");

const form = document.createElement("form");

const formTitle = document.createElement("h2");
formTitle.textContent = "Write Us A Message";

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Your name";
const nameLabel = document.createElement("label");
nameLabel.textContent = "Name";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Your email";
const emailLabel = document.createElement("label");
emailLabel.textContent = "Email";

const messageInput = document.createElement("textarea");
messageInput.placeholder = "Your Message";

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Send Message";

form.append(nameLabel, nameInput, emailLabel, emailInput, messageInput, submitBtn);

formConatiner.append(formTitle, form);
contactContent.append(contactText, contactMain, formConatiner);

contactContainer.appendChild(contactContent);
content.appendChild(contactContainer);
};

export default contact;