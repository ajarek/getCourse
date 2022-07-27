 import { Input } from "./input.js";

    export class Form{
        constructor()
        {
            
        }
        render(){
            const form = document.createElement('form');
            const inputCurse = new Input('📓','text','Course Name');
            const inputAuthor = new Input('👤','text','Author');
            const inputImage = new Input('📷','text','Image URL');
            const inputSubmit = new Input('🚀','submit','Submit');
            const row = document.createElement('div');
            row.classList.add('row','text-center');
            form.append(inputCurse.render(),inputAuthor.render(),inputImage.render(),inputSubmit.render(),row);
            return form;
    }
}