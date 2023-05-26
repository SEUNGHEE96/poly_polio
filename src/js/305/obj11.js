class Book {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    buy() {
        console.log(`${this.title}을 ${this.price}`)
    }
};

let boo = new Book("자료구조", 15000);
console.log(boo);
boo.buy();