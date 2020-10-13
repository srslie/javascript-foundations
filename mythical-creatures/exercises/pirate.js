class Pirate {
  constructor(name, job = 'scallywag', isCursed = false, booty = 0) {
    this.name = name;
    this.job = job;
    this.cursed = isCursed;
    this.booty = booty;
  };

  robShip() {
    this.booty += 100
    return 'YAARRR!'
  };
};



module.exports = Pirate;
