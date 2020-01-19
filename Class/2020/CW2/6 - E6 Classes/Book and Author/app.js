// BOOK AND AUTHOR

class Book{
    constructor(title, price){
        this.uTitle = title;
        this.uPrice = price;
    }
changePrice(discount){

    console.log(this.uPrice * (100-discount))
    this.uPrice = (this.uPrice*(100-discount)); 
    
    return `The price has changed from ${this.uPrice} by ${discount}% to ${this.uPrice}.`
}
}

let mobyDick = new Book ("Moby Dick",100);

document.write(mobyDick.changePrice(30))
