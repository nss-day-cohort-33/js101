
// values with  no context don't help us
"Joe", 51, "green", true

// but storing those values in a variable begins to give us some context for those values, and allows us to reference those values when we need to access them
// Saved as an array
const personstuff = ["Joe", 51, "green", true]

const intro = "Hi, I'm Joe. I'm 51 years old. My favorite color is green. I love dogs."

const person = {
  name: "Joe",
  age: 51,
  faveColor: "green",
  likesDogs: true
}


// Dom Querying
const hEl = document.querySelector("h1")
console.log('hel', hEl);

const fooEl = document.querySelector("#hungry")
console.log('fooEl', fooEl);

const sectionEl = document.querySelector(".article__section")

console.log('sectionEL:', sectionEl);

const sectionElPlus = document.querySelectorAll(".article__section")
console.log('sectionElPlus', sectionElPlus);

for ( let i=0; i < sectionElPlus.length; i++) {
  console.log("Loop is happening", sectionElPlus[i].textContent)
  if (sectionElPlus[i].classList.contains("article__footer")) {
    sectionElPlus[i].innerHTML = "This is freaky, man"
  }
}

sectionElPlus[2].classList.add("isGreen")
sectionElPlus[2].textContent = "This is freaky, man"


// String Template Literals
let name = "Fred"

// These log the same result
console.log("My 'name' is not" + " " + name)
console.log(`My name is not ${name}`)


// An object showing a variety of data type values (string, number, boolean, function )
let kid = {
  name: "Larry",
  age: 10,
  isHungry: true,
  sayMyName: () => "My name is Larry"
}

// Lightning exercises
// Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// meh
// let car = ["red", 2015, "Ford", "Mustang"]

// better
let car = {
  color: "blue",
  maker: "Ford",
  model: "Mustang",
  year: 2015
}

console.log(`I love my ${car.color} ${car.model}`)

// Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// overkill, and doesn't represent one thing
let animals = {
  names: ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]
}

// winner!
let animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

let mom = {
  first_name: "Keesha",
  last_name: "Smith-Hawkins",
  age: 43,
  faveMeal: "meat lovers deep dish pizza"
}

let dad = {
  first_name: "Larry",
  last_name: "Smith",
  age: 38,
  faveMeal: "quinoa salad"
}

let child1 = {
  first_name: "Fanny",
  last_name: "Smith",
  age: 13,
  faveMeal: "fish tacos"
}

let child2 = {
  first_name: "Fauntleroy",
  last_name: "Smith",
  age: 10,
  faveMeal: "ketchup"
}

let familyMembers = [mom, dad, child1, child2]

// This works, too!
let familyMemberz = [
  {
    moniker: "mom",
    first_name: "Keesha",
    last_name: "Smith-Hawkins",
    age: 43,
    faveMeal: "meat lovers deep dish pizza"
  },
  {
    moniker: "dad",
    first_name: "Larry",
    last_name: "Smith",
    age: 38,
    faveMeal: "quinoa salad"
  }
]

// queryselector vs querySelectorAll
// One element
let blogContainer = document.querySelector('.blogPosts')
// console.log('blogContainer', blogContainer);
blogContainer.classList.add("currentBlog")


// one or more elements wrapped in []
let myArticles = document.querySelectorAll('.blogArticle')
// console.log('myArticles', myArticles);
for (let i = 0; i < myArticles.length; i++) {
  myArticles[i].classList.add("stuff")
}

// Dot and bracket notation
let lassie = {
  name: "Lassie",
  age: 8,
  breed: "collie"
}

// dot notation to set a value
lassie.age = 9
lassie.barksToday = 234

// bracket notation
// getting a value
console.log("lassie's breed", lassie["breed"])
// setting a value
lassie["color"] = "brown and white"

let keyToLookup = "breed"
console.log('bracket var', lassie[keyToLookup]);

console.log("looping through Lassie")
for (let foo in lassie) {
  console.log(`lassie's ${foo}:`, lassie[foo] );
}

// object values can be any data type
lassie.nicknames = ["Lass", "Pooch", "Doggo", "Lassie McBarkbark"]

lassie.family = {owner: "Timmy", personWhoFeeds: "Mom", HumanWhoThrowsStick: "Dad"}

// change nicknames from an array to an object
lassie.nicknames = {faveNick: "Doggo", leastFaveNick: "Pooch", newestNick: "Lass"}
console.log('lassie updated value',  lassie);


// Object notation lightning exercise
const nashvilleSoftwareSchool = {
  founded: 2012,
  director: "John Wark",
  instructors: {
      fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
      partTime: ["Zoe", "Nathan"]
  },
  address: "500 Interstate Blvd. S"
}

// output all the full timers
console.log("full time instrux:", nashvilleSoftwareSchool.instructors.fullTime);
// output all the part timers
console.log("part time instrux:", nashvilleSoftwareSchool.instructors.partTime);
// output only "Andy" and "Zoe"
console.log("specific instrux:", nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);


// functions
function chickenMonkey(foo, limit) {
  for (let currentNumber = foo; currentNumber <= limit; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey")
    }
    else if (currentNumber % 5 === 0) {
      console.log("Chicken")
    }
    else if (currentNumber % 7 === 0) {
      console.log("Monkey")
    }
    else {
      console.log(currentNumber)
    }
  }
}

chickenMonkey(50, 125)
