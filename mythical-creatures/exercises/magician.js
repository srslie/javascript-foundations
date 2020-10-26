class Magician {
  constructor(object = {}) {
    this.name = object.name;
    this.topHat = (object.topHat === undefined) ? true : object.topHat;
    this.confident = false;
    this.casts = 0
  }

    incantation(words) {
      return words.toUpperCase() + '!'
    }

    cast() {
      if (this.topHat && this.casts < 3){
        this.casts += 1
        return 'PULL RABBIT FROM TOP HAT'
      } else {
        this.confident = true
        return 'PULL DOVE FROM SLEEVE'
      }
    };

    performShowStopper() {
      if (this.confident) {
        return 'WOW! The magician totally just sawed that person in half!'
      } else {
        return 'Oh no! Practice more before attempting this trick!'
      }
    };

}



module.exports = Magician;
