class Vampyre {
  constructor(name, pet = 'bat') {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
  }

  drink() {
    return this.thirsty = false;
  }
}

module.exports = Vampyre;
