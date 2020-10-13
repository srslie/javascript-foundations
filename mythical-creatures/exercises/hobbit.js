class Hobbit {
  constructor(name, age = 0, adultStatus = false, oldStatus = false, ringStatus = false) {
    this.name = name;
    this.age = age;
    this.adult = adultStatus;
    this.old = oldStatus;
    (this.name === 'Frodo'? this.hasRing = true : this.hasRing = ringStatus)
  };

  celebrateBirthday() {
    this.age += 1
    if (this.age === 33) {
      this.adult = true
    } else if (this.age === 101) {
      this.old = true
    }
  };
};


module.exports = Hobbit;
