import { Form } from "./class/form.js";
import { Card } from "./class/card.js";
const container = document.querySelector(".container-lg");

function displayCard(e) {
  e.preventDefault();
  const nameCurse=e.target[0].value||"Java";
    const nameAuthor=e.target[1].value||"John Doe";
    const imageSrc=e.target[2].value||"https://cdn.freebiesupply.com/logos/thumbs/2x/java-logo.png"
   const cardInstant = new Card(nameCurse,nameAuthor,imageSrc);
   const row=document.querySelector('.row');
    row.append(cardInstant.render())
    
}

function eventSubmit() {
  const form = document.querySelector("form");
  form.addEventListener("submit", displayCard);
}
function init() {
  const formInstant = new Form();
  container.append(formInstant.render());
  eventSubmit();
}
init();
