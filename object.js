// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 60
let kiosk={
    fruit:'orange',
    cost:30,
    fruitCost:function(){
      return `Two ${this.fruit}s for KES ${this.cost*2}.00`
    }
}
console.log(kiosk.fruitCost());