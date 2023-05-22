class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getValue(){
        return console.log("Ten: " + this.name + ", Gia: " + this.price);
    }
    
    isInStock(){
        const status = ["con hang", "het hang"];
        const random = Math.floor(Math.random() * status.length);
        console.log(random, status[random]);
    }
}

class Mobile extends Product{
    constructor(name, price, brand){
        super(name, price);
        this.brand = brand;
    }

    getBrand(){
        return console.log("Thuong hieu: " + this.brand);
    }
}

const Product1 = new Mobile("Iphone Promax 128Gb", "26.440.000", "apple");
Product1.getValue();
Product1.isInStock();
Product1.getBrand();
