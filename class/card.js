export class Card{
    constructor(curse,author,image){
        this.curse = curse;
        this.author = author;
        this.image = image;
        
    }
    render(){
        const card = document.createElement("div");
        card.classList.add("col-md-4");
        card.innerHTML = `<img src="${this.image}" class="card-img-top" alt="${this.curse}>
        <div class="card-body">
          <h5 class="card-title">Course : ${this.curse}</h5>
            <p class="card-text">Author : ${this.author}</p> 
        </div>`
        return card;
}
}