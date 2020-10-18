class Werewolf {
  constructor(name, human = true, wolf = false, hungry = false, victims = [] ){
    this.name = name;
    this.human = human;
    this.wolf = wolf
    this.hungry = hungry;
    this.victims = victims

  }

  transform() {
    if (this.human) {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    }
  }

  eat(victim) {
    if (this.wolf) {
      this.victims.push(victim)
      this.transform()
    }
  }

};

module.exports = Werewolf;
