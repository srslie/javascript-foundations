class Vampire {
  constructor(name, pet = 'bat', isThirsty = true) {
    this.name = name;
    this.pet = pet;
    this.thirsty = isThirsty;
  }

  drink() {
    return this.thirsty = false
  }
}

module.exports = Vampire
