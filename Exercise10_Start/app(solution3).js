/*For a possible game, set up the creation of an object that uses a prototype.  Use Object.create(), a constructor function, or a class, to create a game character object. Set up the prototype to have the following properties:
-speed (default value: 6)
-stregnth (default value: 8)
-hitpoints (default value 150)
-a method that determines damage per second and returns it. That is equal to speed * stregnth
Create one object providing values for speed and hitpoints. Let stregnth use default value. Then display damage per second*/


class gameCharacter{
    constructor(speed, strength, hitpoints){
        if(speed){
            this.speed = speed;
        }
        if(strength){
            this.strength = strength;
        }
        if(hitpoints){
            this.hitpoints = hitpoints;
        }
    }

    damPerSec(){
        return this.speed * this.strength;
    }
}


gameCharacter.prototype.speed = 15;
gameCharacter.prototype.strength = 12;


var char1 = new gameCharacter();
    console.log(char1.damPerSec());