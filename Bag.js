Bag.js

class Bag {
    constructor() {
      this.goldCoins = 0;
      this.platinumCoins = 0;
      this.items = []; // Array to store item names
    }
  
    // Add gold coins to the bag
    addGoldCoins(amount) {
      this.goldCoins += amount;
      console.log(`${amount} gold coins added. Total gold coins: ${this.goldCoins}`);
    }
  
    // Add platinum coins to the bag
    addPlatinumCoin() {
      this.platinumCoins += 1;
      console.log(`1 platinum coin added. Total platinum coins: ${this.platinumCoins}`);
    }
  
    // Add an item to the bag
    addItem(item) {
      this.items.push(item);
      console.log(`Item '${item}' added to the bag.`);
    }
  
    // Display the contents of the bag
    displayBag() {
      console.log("Bag Contents:");
      console.log(`Gold Coins: ${this.goldCoins}`);
      console.log(`Platinum Coins: ${this.platinumCoins}`);
      console.log("Items:", this.items.length > 0 ? this.items.join(", ") : "No items");
    }
  }
  
  module.exports = Bag;