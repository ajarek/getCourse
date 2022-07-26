import { Form } from "./class/form.js";
const container = document.querySelector('.container-lg');

const form = new Form();
container.append(form.render());
