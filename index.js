// Code your solution in this file
function findMatching(thing, name){
  const newThing = [];
  return thing.filter(function (newThing) {
    return newThing.toLowerCase() === name.toLowerCase();
   });
  }


function fuzzyMatch(thing, letters){
  const thing2 = [];
  let nameLetters = letters.length;
  return thing.filter(function (thing2){
    return thing2.slice(0, nameLetters) === letters;
  })

}
function matchName(){

}
