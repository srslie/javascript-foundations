var assert = require('chai').assert;
var Werewolf = require('../exercises/werewolf');
var Victim = require('../exercises/victim');

describe('Werewolf', function() {

  it('should be a function', function() {
    assert.isFunction(Werewolf);
  });

  it('should instantiate our good friend, Werewolf', function() {
    var larry = new Werewolf();

    assert.instanceOf(larry, Werewolf);
  });

  it('should have a name', function() {
    var werewolf = new Werewolf('Jeff');
    var werewolf2 = new Werewolf('Sal');

    assert.equal(werewolf.name, 'Jeff');
    assert.equal(werewolf2.name, 'Sal');
  });

  it('should default to human form', function() {
    var werewolf = new Werewolf('Casey');

    assert.equal(werewolf.human, true);
  });

  it('should not be in human form after transforming', function() {
    var werewolf = new Werewolf('Scott');

    werewolf.transform();

    assert.equal(werewolf.human, false);
  });

  it('should show assert wolf form after transforming', function() {
    var werewolf = new Werewolf('Lousia');

    assert.equal(werewolf.wolf, false);

    werewolf.transform();

    assert.equal(werewolf.wolf, true);
  });

  it('should show what form its in', function() {
    var werewolf = new Werewolf('Lousia');

    assert.equal(werewolf.wolf, false);

    werewolf.transform();
    werewolf.transform();

    assert.equal(werewolf.wolf, false);
    assert.equal(werewolf.human, true);

    werewolf.transform();

    assert.equal(werewolf.wolf, true);
    assert.equal(werewolf.human, false);
  });

  it('should start off not hungry', function() {
    var werewolf = new Werewolf('Bob')

    assert.equal(werewolf.hungry, false);
  });

  it('should become hungry after changing into werewolf form', function() {
    var werewolf = new Werewolf('Mary')

    assert.equal(werewolf.hungry, false)

    werewolf.transform();

    assert.equal(werewolf.hungry, true)
  });

  it('should be able to eat(victim) once hungry', function() {
    var werewolf = new Werewolf('Mo');
    var victim1 = new Victim('Lara');

    werewolf.transform()
    assert.equal(werewolf.hungry, true)
    
    werewolf.eat(victim1);

    assert.equal(werewolf.victims.length, 1);
  });

  it('should not be hungry after changing back to human form', function() {
    var werewolf = new Werewolf('Mo')

    werewolf.transform();
    werewolf.transform();

    assert.equal(werewolf.human, true);
    assert.equal(werewolf.hungry, false);
  });

  it('should transform back to human form after eating', function() {
    var werewolf = new Werewolf('Mo')
    var victim2 = new Victim('Jesus')

    werewolf.eat(victim2)

    assert.equal(werewolf.human, true)
  });

  it('should not be able to eat a victim while in human form', function() {
    var werewolf = new Werewolf('Jane')
    var victim3 = new Victim('Jesus')
    assert.equal(werewolf.human, true)

    werewolf.eat(victim3)

    assert.equal(werewolf.victims.length, 0)
  });
});

describe('Victim', function() {

  it('should be a function', function() {
    assert.isFunction(Victim);
  });

  it('should instantiate our good friend, Victim', function() {
    var victim = new Victim();

    assert.instanceOf(victim, Victim);
  });

  it('should have a name', function() {
    var victim = new Victim('Leta');

    assert.equal(victim.name, 'Leta');
  });
});
