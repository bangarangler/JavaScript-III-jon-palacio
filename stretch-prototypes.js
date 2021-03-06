/*
	Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

	In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

	At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

	Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
	=== GameObject ===
	* createdAt
	* dimensions (These represent the character's size in the video game)
	* destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(things) {
  this.createdAt = things.createdAt;
  this.dimensions = things.dimensions;
}

GameObject.prototype.destroy = function() {
  return "Object was removed from the game.";
};

/*
	=== CharacterStats ===
	* healthPoints
	* name
	* takeDamage() // prototype method -> returns the string '<object name> took damage.'
	* should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.healthPoints = stats.healthPoints;
  this.name = stats.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

/*
	=== Humanoid (Having an appearance or character resembling that of a human.) ===
	* team
	* weapons
	* language
	* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
	* should inherit destroy() from GameObject through CharacterStats
	* should inherit takeDamage() from CharacterStats
*/
function Humanoid(attrs) {
  CharacterStats.call(this, attrs);
  this.team = attrs.team;
  this.weapons = attrs.weapons;
  this.language = attrs.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

//stretch attempt at villain and hero constructor functions
function Villan(baddie) {
  Humanoid.call(this, baddie);
  this.face = baddie.face;
}

Villan.prototype = Object.create(Humanoid.prototype);

Villan.prototype.catchPhrase = function() {
  return `${this.name} insults you in ${this.language}.`;
};

Villan.prototype.motion = function() {
  return `${this.name} points ${this.weapons} at enemies.`;
};

//SHAWN CAN YOU HELP WITH THIS? TRYING TO MAKE DIFFERENT OPTIONS AS A INSULT
//THAT CAN THEN BE PASSED BACK INTO THE METHOD WHEN IT'S CALLED

//Villan.prototype.motion = function(type) {
//const point = `${this.name} points ${this.weapons} at enemies.`;
//const stare = `${this.name} glares in your direction`;
//if (type === "stare") {
//type = stare;
//} else if (type === point) {
//type = point;
//}
//};

Villan.prototype.reputation = function() {
  return `${this.name} is the leader of ${this.team}.`;
};
function Hero(niceGuys) {
  Humanoid.call(this, niceGuys);
  this.gesture = niceGuys.gesture;
  this.legendaryStatus = niceGuys.legendaryStatus;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.charm = function() {
  return `${this.team} has been my family through it all! With ${
    this.weapons
  } at my side we shall defend our comrades!`;
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); //Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); //Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

const knight = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 2,
    height: 3
  },
  healthPoints: 9,
  name: "Arthur",
  team: "The Goodest of Guys --- and Gals",
  weapons: ["Broad Sword"],
  language: "Old English",
  gesture: "Heroic wave",
  legendaryStatus: "Revered"
});

const warlock = new Villan({
  createdAt: new Date(),
  dimensions: {
    lenght: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bad-Bruce",
  team: "Warlock Guild",
  weapons: ["Staff of Doom"],
  language: "Lock Speak",
  face: "angry face"
});

console.log(warlock.createdAt);
console.log(warlock.dimensions);
console.log(warlock.healthPoints);
console.log(warlock.name);
console.log(warlock.team);
console.log(warlock.weapons);
console.log(warlock.language);
console.log(warlock.face);
console.log(warlock.motion());
console.log(warlock.reputation());
console.log(warlock.catchPhrase());

console.log(knight.createdAt);
console.log(knight.dimensions);
console.log(knight.healthPoints);
console.log(knight.name);
console.log(knight.team);
console.log(knight.weapons);
console.log(knight.gesture);
console.log(knight.legendaryStatus);
console.log(knight.charm());
