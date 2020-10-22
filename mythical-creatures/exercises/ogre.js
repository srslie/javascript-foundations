class Ogre {
  constructor(name, home = 'Swamp') {
    this.name = name;
    this.home = home;
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++
    if (human.noticesOgre()) {
      this.swingAt(human)
    }
  }

  swingAt(human) {
    this.swings++
    human.knockedOut = this.swings % 2 === 0
  }

  apologize(human) {
    human.knockedOut = false
  }
}


module.exports = Ogre;
