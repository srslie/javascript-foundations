class Centaur {
  constructor(object) {
    this.name = object.name;
    this.type = object.type ? object.type : null;
    this.cranky = object.cranky ? object.cranky : false;
    this.standing = object.standing ? object.standing : true;
    this.layingDown = object.layingDown ? object.layingDown : false;
    this.activities = object.activities ? object.activities : 1 ;
    this.rested = object.rested ? object.rested : true;
  }

  shoot() {
    if (this.cranky || this.layingDown) {
     return 'NO!'
   }  else if (this.activities === 2 ) {
     this.activties++
     this.cranky = true
     this.rested = false
     return 'Twang!!!'
   } else {
      this.activities++
      return 'Twang!!!'
   }
  }

  run() {
    if (this.cranky || this.layingDown) {
     return 'NO!'
   }  else if (this.activities === 2 ) {
    this.activties++
    this.cranky = true
    this.rested = false
    return 'Clop clop clop clop!!!'
   } else {
    this.activities++
    return 'Clop clop clop clop!!!'
   }
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
