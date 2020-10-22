class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.victims = [];
  }

  transform() {
      this.wolf = !this.wolf
      this.human = !this.human
      this.hungry = !this.hungry
  }

  eat(victim) {
    if (this.wolf) {
      this.victims.push(victim)
      this.transform()
    }
  }

};

module.exports = Werewolf;
