class Dragon {
  constructor(name, rider, color, isHungry = true, numberMeals = 1){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = isHungry;
    this.meals = numberMeals;
  };

  eat() {
    if (this.hungry && this.meals < 3) {
      this.meals += 1
    } else if (this.meals === 3) {
      this.hungry = false
    }
  };

};


module.exports = Dragon;
