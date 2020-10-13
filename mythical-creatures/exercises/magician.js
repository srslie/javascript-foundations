class Magician {
  constructor(object) {
    this.name = object.name;
    this.hasTopHat = object.topHat || false;
    this.confident = object.isConfident || false;
    this.casts = object.casts || 1
  }

    incantation(words) {
      return words.toUpperCase() + '!'
    }

    cast() {
      if (this.topHat && this.casts < 3){
        this.casts += 1
        return 'PULL RABBIT FROM TOP HAT'
      } else {
        return 'PULL DOVE FROM SLEEVE'
      }
    };

    performShowStopper() {
      if (this.confident) {
        return 'Oh no! Practice more before attempting this trick!'
      } else {
        return 'WOW! The magician totally just sawed that person in half!'
      }
    }

}


/*

class Magician {
  constructor(name, hasTopHat, isConfident = false, casts = 1) {
    this.name = name;
    this.hasTopHat = hasTopHat;

  //  if (hasTopHat.topHat === undefined){ this.topHat = true } else {this.topHat = false}
    this.confident = isConfident;
    this.casts = casts
  };

  incantation(words) {
    return words.toUpperCase()
  }

  cast() {
    if (this.topHat && this.casts < 3){
      this.casts += 1
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  };

  performShowStopper() {
    if (this.confident) {
      return 'Oh no! Practice more before attempting this trick!'
    } else {
      return 'WOW! The magician totally just sawed that person in half!'
    }
  }

};

*/

module.exports = Magician;
