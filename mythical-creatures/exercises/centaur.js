class Centaur {
  constructor(object) {
    this.name = object.name;
    this.type = object.type ? object.type : null;
    this.cranky = object.cranky ? object.cranky : false;
    this.standing = object.standing ? object.standing : true;
    this.layingDown = object.layingDown ? object.layingDown : false;
    this.activities = 0
    this.rested = true
  }

  shoot() {
    var noise = (this.cranky || this.layingDown) ? 'NO!' : 'Twang!!!'
    this.activities++
    this.cranky = this.activities > 2 || this.cranky
    this.rested = this.activities <= 2
    return noise
  }

  run() {
    var sound = (this.cranky || this.layingDown) ? 'NO!' : 'Clop clop clop clop!!!'
    this.activities++
    this.cranky = this.activities > 2 || this.cranky
    this.rested = this.activities <= 2
    return sound
  }

  sleep() {
    if (this.standing) {
      return 'NO!'
    } else {
      this.activities = 0
      this.cranky = false
      this.rested = true
      return 'ZZZZ'
    }
  }

  layDown() {
      this.standing = false
      this.layingDown = true
  }

  standUp() {
      this.standing = true
      this.layingDown = false
  }

  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!'
    } else if (this.rested) {
      this.cranky = true
    } else {
      this.activites = 0
      this.cranky = false
    }
  }
}


module.exports = Centaur;
