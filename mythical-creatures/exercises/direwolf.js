class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }
  protect(stark) {
    if (this.starksToProtect.length < 2 && this.home === stark.location) {
    this.starksToProtect.push(stark)
    stark.safe = true
    this.huntsWhiteWalkers = false
    }
  }
  leave(stark) {
    var index = this.starksToProtect.indexOf(stark)
    var dangerStark = this.starksToProtect.splice(index, 1)
    dangerStark[0].safe = false
    this.huntsWhiteWalkers = (this.starksToProtect.length === 0)
  }
}

module.exports = Direwolf;
