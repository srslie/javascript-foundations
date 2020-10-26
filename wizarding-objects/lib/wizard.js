class Wizard {
  constructor(name) {
    this.name = name;
    this.petsCount = 0
    this.pets = [];
    this.wand = null;
  }

  adoptPet(pet) {
    this.petsCount++
    this.pets.push(pet)
  }

  petList() {
    var list = []
    for (var i = 0; i < this.petsCount; i++){
      list.push(`${this.pets[i].type} named ${this.pets[i].name}`)
    }
    return `A ${list.join('; an ')}.`
  }

  giveWand(wand) {
    this.wand = wand
  }

  castSpell(spell) {
    return this.wand.cast(spell)
  }
}


module.exports = Wizard;
