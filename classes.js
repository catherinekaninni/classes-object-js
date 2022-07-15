// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
// kioskCalc.getTotalCost( )  // returns “2 orange for KES 60” 
class KioskCalc{
    constructor(fruit,quantity){
         this.fruit = fruit;
         this.quantity =quantity;
         this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
         this.getTotalCost=function(){
            return`${quantity} ${fruit} for KES ${quantity ,this.fruitsPriceList.avocado*2}`
         }
    }

}
  var kioskCalc=new KioskCalc("avocado",2)
console.log(kioskCalc.getTotalCost());