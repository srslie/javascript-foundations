class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured';
    this.humanWards = []
  }

  receiveBelief() {
    this.dust += 1
  }

  believe() {
    this.dust += 10
  }

  makeDresses(flowers) {
    this.clothes.dresses = this.clothes.dresses.concat(flowers)
  }

  provoke() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    if (this.humanWards.length === 2) {
      this.disposition = 'Good natured'
      infant.disposition = 'Malicious'
      this.humanWards.push(infant)
    } else if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious'
      this.humanWards.push(infant)
   }
   return infant
  }

}


module.exports = Fairy;
