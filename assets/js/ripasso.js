const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 23,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

console.log("___Esercizio_1___");

const charactersNames = [];
console.log("Qua poteva essere il tuo codice");

console.log("");
console.log("___Esercizio_2___");

for (let x = 0; x < starWarsCharacters.length; x++) {
  charactersNames.push(starWarsCharacters[x].name);
}
console.log(charactersNames);

console.log("");
console.log("___Esercizio_3___");

const femaleCharacters = [];
for (let x = 0; x < starWarsCharacters.length; x++) {
  if (starWarsCharacters[x].gender === "female") {
    femaleCharacters.push(starWarsCharacters[x].name);
  }
}
console.log(femaleCharacters);

console.log("");
console.log("___Esercizio_4___");

const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  blue_gray: [],
};
console.log("Qua poteva essere il tuo codice");

console.log("");
console.log("___Esercizio_5___");

for (let x = 0; x < starWarsCharacters.length; x++) {
  const ecolor = starWarsCharacters[x].eye_color;

  switch (ecolor) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[x].name);
      break;
    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[x].name);
      break;
    case "brown":
      eyeColor.brown.push(starWarsCharacters[x].name);
      break;
    case "red":
      eyeColor.red.push(starWarsCharacters[x].name);
      break;
    case "blue-gray":
      eyeColor.blue_gray.push(starWarsCharacters[x].name);
      break;
  }
}
console.log(eyeColor);

console.log("");
console.log("___Esercizio_6___");

let cremass = 0;
let x = 0;

while (x < starWarsCharacters.length) {
  const charmass = starWarsCharacters[x].mass;
  cremass = cremass + parseFloat(charmass);
  x++;
}
console.log(cremass);

console.log("");
console.log("___Esercizio_7___");

switch (true) {
  case cremass < 501:
    console.log("Ship is under loaded");
    break;
  case cremass > 500 && cremass < 701:
    console.log("Ship is half loaded");
    break;
  case cremass > 700 && cremass < 901:
    console.log("Warning: Load is over 700");
    break;
  case cremass > 900 && cremass < 1001:
    console.log("Critical Load: Over 900");
    break;
  case cremass > 1000:
    console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
    break;
  default:
    console.log("No data provided");
}

console.log("");
console.log("___Esercizio_8___");

for (let x = 0; x < starWarsCharacters.length; x++) {
  let char = starWarsCharacters[x];
  if (char.gender === "n/a") {
    char.gender = "robot";
  }
}
console.log(starWarsCharacters);

console.log("");
console.log("___Esercizio_9___");

console.log("Prima:", charactersNames.length, charactersNames);

for (let x = 0; x < charactersNames.length; x++) {

  for (let y = 0; y < femaleCharacters.length; y++) {
    if (charactersNames[x] === femaleCharacters[y]) {
      charactersNames.splice(x, 1);
    }
  }
}

console.log("Dopo:", charactersNames.length, charactersNames);

console.log("");
console.log("___Esercizio_10___");

const randomIndex = Math.floor(Math.random() * starWarsCharacters.length)
const selectedCharacter = starWarsCharacters[randomIndex]

console.log('The found character name is:', selectedCharacter.name)

if (selectedCharacter.gender === 'female') {
  console.log('She is', selectedCharacter.height, 'cm tall')
} else {
  console.log('He is', selectedCharacter.height, 'cm tall')
}

if (
  selectedCharacter.hair_color !== 'n/a' &&
  selectedCharacter.hair_color !== 'none'
) {
  console.log('and has', selectedCharacter.hair_color, 'hair,')
} else {
  console.log('and bald,')
}

console.log('with', selectedCharacter.skin_color, 'skin.')