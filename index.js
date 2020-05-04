var readlineSync = require('readline-sync');

let runStory = true
while (runStory) {


  startOptions = ['Put your hand in hole', 'Find the Key', 'Open the door'],
    index = readlineSync.keyInSelect(startOptions, 'You are trapped in a room and need to escape! What are you going to do first?');

  //1
  let answer;
  if (startOptions[index] === 'Find the Key') {
    optionKey = ['Put your hand in hole', 'Open the door'],
      index = readlineSync.keyInSelect(optionKey, 'You found the Key! Now what?');

    if (optionKey[index] === 'Open the door') {
      console.log('You Won!')
      runStory = false
    } else if (optionKey[index] === 'Put your hand in hole') {
      optionHandTwo = ['yes', 'no'],
        index = readlineSync.keyInSelect(optionHandTwo, 'Oh no you were eaten after you put your arm in the hole! Want to try again?');

      if (optionHandTwo[index] === 'no') {
        console.log('Thats too bad! See you Later');
        runStory = false
      } else if (optionHandTwo[index] === 'yes') {

        continue;
      }
    }
  }

  //2
  if (startOptions[index] === 'Open the door') {
    optionDoor = ['Put your hand in hole', 'Find the Key'],
      index = readlineSync.keyInSelect(optionDoor, 'The Door is Locked! Now what?');


    if (optionDoor[index] === 'Find the Key') {
      optionKeyTwo = ['Put your hand in hole', 'Open the door'],
        index = readlineSync.keyInSelect(optionKeyTwo, 'You found the Key! Now what?');

      if (optionKeyTwo[index] === 'Open the door') {
        console.log('You Won!')
        runStory = false


      } else if (optionKey[index] === 'Put your hand in hole') {

        continue;
      }
    }
  }

  //3
  if (startOptions[index] === 'Put your hand in hole') {
    optionHand = ['yes', 'no'],
      index = readlineSync.keyInSelect(optionHand, 'Oh no you were eaten after you put your arm in the hole! Want to try again?');

    if (optionHand[index] === 'no') {
      console.log('Thats too bad! See you Later');
      runStory = false
    } else if (optionHand[index] === 'yes') {
      continue;
    }
  }
}










// const readlineSync = require("readline-sync");

// // CHOICE BANK
// const optionBank = {
//   get handHole() {
//     return {
//       text: "Put your hand in hole",
//       options: ["yes", "no"],
//       question: "Oh no you were eaten after you put your arm in the hole! Want to try again?",
//     };
//   },
//   get openDoor() {
//     return {
//       text: "Open the door",
//       get options() {
//         return hasKey ? ["startOver", "endGame"] : ["handHole", "findKey"];
//       },
//       get question() {
//         return hasKey ? "You win!" : "The Door is Locked! Now what?";
//       },
//     };
//   },
//   get findKey() {
//     return {
//       text: "Find the key",
//       options: ["handHole", "openDoor"],
//       get question() {
//         hasKey = true;
//         return "You found the Key! Now what?";
//       },
//     };
//   },
//   get startOver() {
//     return {
//       text: "Start over?",
//       options: ["findKey", "openDoor", "handHole"],
//       question: "Shall we play a game?",
//     };
//   },
//   get endGame() {
//     return {
//       text: "Give up?",
//       options: [],
//       get question() {
//         runStory = false;
//         console.log('You escaped!')
//         return "";
//       }
//     };
//   },
// };

// // RUN GAME
// let runStory = true;
// let choice = optionBank["startOver"];
// let hasKey = false;

// while (runStory) {
//   if (!choice.options.length) return
//   const optionTexts = choice.options.map((key) => optionBank[key].text);
//   const index = readlineSync.keyInSelect(optionTexts, choice.question);
//   choice = optionBank[choice.options[index]];
// }