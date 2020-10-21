class Bag {
 constructor() {
   this.empty = true;
   this.count = 0;
   this.candies = [];
 }

 fill(candy) {
   this.candies.push(candy)
   this.count = this.candies.length
 }

 contains(candyType) {
   for (var i = 0; i < this.candies.length; i++) {
     return candyType === this.candies[i].type
  }
 }
}

module.exports = Bag;
